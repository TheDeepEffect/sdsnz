import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Children, ReactNode } from "react";
import BackgroundImage from "../../../../components/BackgroundImage";
import BreadCrumbs from "../../../../components/BreadCrumbs";
import Button from "../../../../components/Button";
import Content from "../../../../components/Content";
import Label from "../../../../components/Label";
import PriceCard from "../../../../components/PriceCard";
import QuickLinks from "../../../../components/QuickLinks";
import { getAllPagesWithSlug, getPage } from "../../../../lib/api";
import { Page } from "../../../../lib/schema";
import { PriceCardProps } from "../../../../utils/types";
import useMapImage from "../../../../utils/useMapImage";
import styles from "./../../../../styles/ServiceName.module.css";

export default function ServiceName(props: ReactNode & { page: Page }) {
  const { page } = props;
  const { content } = page;
  const router = useRouter();
  const imageMap = useMapImage(page?.pageImgaesCollection?.items);

  return router.isFallback ? <>Loading...</> : (
    <div className={styles.serviceName}>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        content?.breadCrumbs?.length &&
        <BreadCrumbs
          crumbs={content?.breadCrumbs || []}
        />
      }
      {
        content.label &&
        <Label>
          {content.label}
        </Label>
      }
      {
        content.header &&
        <div className={styles.headerWithPrice}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h3>{content.header.heading}</h3>
              {
                React.Children.toArray(content.header.paragraphs.map((x: any) => <p>{x}</p>))
              }
            </div>
            <div className={styles.headerPrices}>
              {React.Children.toArray(
                content.header.prices.map((price: PriceCardProps) => {
                  return <PriceCard
                    {...price}
                  />
                })
              )}
            </div>
          </div>
          <Link
            href={content.header.buttonInfo.href}
          >
            <a>
              <Button>
                {content.header.buttonInfo.label}
              </Button>
            </a>
          </Link>
        </div>
      }
      {
        content.ladataWithBgImage &&
        <BackgroundImage
          className={[styles.bgImage, styles.laBgImageContent]}
          url={imageMap[content.ladataWithBgImage.imageId]}
        >
          {
            content.ladataWithBgImage.content.map((data: any) => {

              return Object.keys(data).map(key => {
                switch (key) {
                  case 'paragraphs':
                    return React.Children.toArray(
                      data[key].map((para: any) => <p>{para}</p>)
                    )
                  case 'headers':
                    return React.Children.toArray(
                      data[key].map((header: any) => <h3>{header}</h3>)
                    )
                  default:
                    break;
                }
              })
            })
          }
          {
            content?.ladataWithBgImage?.buttonInfo &&
            <Link
              href={content.ladataWithBgImage.buttonInfo.href}
            >
              <a>
                <Button>
                  {content.ladataWithBgImage.buttonInfo.label}
                </Button>
              </a>
            </Link>
          }
        </BackgroundImage>
      }
      <div className={styles.pageContent}>
        {
          content?.quickLinks?.length &&
          <QuickLinks
            content={content}
          />
        }
        {
          content?.content?.length &&
          <Content
            content={content}
          />
        }
      </div>
      {
        content.dataWithBgImage &&
        <BackgroundImage
          className={[styles.bgImage, styles.bgImageContent]}
          url={imageMap[content.dataWithBgImage.imageId]}
        >
          {
            content.dataWithBgImage.content.map((data: any) => {

              return Object.keys(data).map(key => {
                switch (key) {
                  case 'paragraphs':
                    return React.Children.toArray(
                      data[key].map((para: any) => <p>{para}</p>)
                    )
                  case 'headers':
                    return React.Children.toArray(
                      data[key].map((header: any) => <h3>{header}</h3>)
                    )
                  default:
                    break;
                }
              })
            })
          }
          {
            content?.dataWithBgImage?.buttonInfo &&
            <Link
              href={content.dataWithBgImage.buttonInfo.href}
            >
              <a>
                <Button>
                  {content.dataWithBgImage.buttonInfo.label}
                </Button>
              </a>
            </Link>
          }
        </BackgroundImage>
      }
    </div>)
}


type Params = {
  params: {
    serviceType: string,
    serviceName: string
  }
}

export async function getStaticProps(props: Params) {
  const { params } = props;

  const data = await getPage(`/services/${params?.serviceType}/${params.serviceName}`);
  return {
    props: {
      page: data ?? null,
    }
  }
}

export async function getStaticPaths() {
  const allPages = await getAllPagesWithSlug('/services/');
  return {
    paths: allPages?.map((page) => `${page?.slug}`).filter(x => x.split("/").length === 4),
    fallback: false
  }
}