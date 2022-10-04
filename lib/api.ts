import { QueryResponse } from "../utils/types";
import { Query } from "./schema";

const FETCH_PAGES = (slug: string) => `query{
    pageCollection(where:{slug_contains:"${slug}"}){
        items{
          name
          slug
      
        }
      }
}`

const FETCH_PAGE = (slug: string) => `
query{
    pageCollection(where:{slug:"${slug}"},limit:1){
        items{
            name
            slug
            content
              pageImgaesCollection{
                items{
                  sys{
                    id
                  }
                  url
                }
              }
        }
        }
}`

function extractPageEntries(fetchResponse: Query) {
  return fetchResponse?.pageCollection?.items
}
function extractPageEntry(fetchResponse: Query) {
  return fetchResponse?.pageCollection?.items[0]
}
async function fetchGraphQL(query: string): Promise<QueryResponse> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

export async function getAllPagesWithSlug(slug: string) {
  const query = FETCH_PAGES(slug);
  const entries = await fetchGraphQL(query);

  return extractPageEntries(entries?.data)
}

export async function getPage(slug: string) {
  const query = FETCH_PAGE(slug);
  const entry = await fetchGraphQL(query);
  return extractPageEntry(entry?.data)
}
