import { ImageProps } from "next/image"
import { LinkProps } from "next/link"
import { ReactNode } from "react"
import { Url } from "url"
import { Maybe, Query, Scalars } from "../lib/schema"

export type NavItemProps = {
    title: String,
    href: Url | string
}

type crumbItem = {
    href: string,
    label: string
}

export type BreadCrumbsProps = {
    crumbs: crumbItem[]
}


export type ServiceCardProps = {
    "imageUrlId": string,
    "label": string,
    "price": string,
    "paragraphs": string[],
    "buttonInfo": {
        "label": string,
        "href": string
    }
}

export type IndividualServicesProps = ServiceCardProps[]

export type OurNetworkProps = {
    locations: string
}

export type LicenseCardProp = {
    "imageUrlId": string,
    "label": string,
    "price": string,
    "paragraphs": string[],
    "buttonInfo": {
        "label": string,
        "href": string
    }
}

export type BackgroundImageProps = {
    children: ReactNode,
    url: string,
    className: string[]
}

export type QueryResponse = {
    data: Query
}

type LoaderProps = {
    src: string,
    width?: number,
    quality?: number
}

export type PriceCardProps = {
    "price": string,
    "title": string,
    "subText": string
};

export type ContentProps = {
    content: Maybe<Scalars['JSON']>,
    imageMap?: {
        [key: string]: string;
    }
}
export type LinkWithPriceProps = {
    lContent: string,
    rContent: string,
    link: string
}
