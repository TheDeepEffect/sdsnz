import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import BackgroundImage from '../../../components/BackgroundImage';
import BreadCrumbs from '../../../components/BreadCrumbs';
import Button from '../../../components/Button';
import HeroImage from '../../../components/HeroImage';
import Label from '../../../components/Label';
import LicenseCard from '../../../components/LicenseCard';
import OurNetwork from '../../../components/OurNetwork';
import ServiceCard from '../../../components/ServiceCards';
import { getAllPagesWithSlug, getPage } from '../../../lib/api';
import { LicenseCardProp, ServiceCardProps } from '../../../utils/types';
import styles from './../../../styles/ServicesType.module.css';
import ErrorPage from "next/error";
import { Page } from '../../../lib/schema';
import Head from 'next/head';
import useMapImage from '../../../utils/useMapImage';
import Content from '../../../components/Content';

export default function ServiceType(props: ReactNode & { page: Page }) {
    const { page } = props;
    const { content } = page;
    const router = useRouter();
    if (router?.isFallback) {
        return <ErrorPage
            statusCode={404}
        />
    }

    const crumbs = content?.breadCrumbs || [];

    const imageMap = useMapImage(page?.pageImgaesCollection?.items);

    return router.isFallback ? <>Loading...</> : (
        <div className={styles.serviceTypePage}>
            <Head>
                <title>{content.title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BreadCrumbs
                crumbs={crumbs}
            />
            <div className={styles.servicePageContent}>
                <HeroImage
                    src={imageMap[content.heroImageId]}
                    height={291}
                    width={1365}
                    objectFit='cover' />
                <Label>
                    {content.label}
                </Label>
                <div className={styles.serviceTypeContent}>
                    {
                        content?.content?.length &&
                        <Content
                            content={content}
                        />
                    }
                    {
                        content?.servicesCard?.length &&
                        <div className={styles.servicesList}>
                            {
                                React.Children.toArray(
                                    content.servicesCard.map((x: ServiceCardProps) => <ServiceCard
                                        {...x}
                                        imageUrlId={imageMap[x.imageUrlId]}
                                    />
                                    )
                                )
                            }
                        </div>
                    }

                    {content?.network &&
                        <OurNetwork
                            locations={content.network} />
                    }

                    {
                        content?.licensesCard?.length &&
                        <div className={styles.licenseInfo}>
                            {React.Children.toArray(content.licensesCard.map((x: LicenseCardProp) => <LicenseCard
                                {...x}
                                imageUrlId={imageMap[x.imageUrlId]}
                            />))}
                        </div>
                    }
                </div>
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
                    {content.dataWithBgImage?.buttonInfo &&
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
        </div>
    )
}


type Params = {
    params: {
        serviceType: string
    }
}

export async function getStaticProps(props: Params) {
    const { params } = props;

    const data = await getPage(`/services/${params?.serviceType}`);
    return {
        props: {
            page: data ?? null,
        }
    }
}

export async function getStaticPaths() {
    const allPages = await getAllPagesWithSlug('/services/');
    return {
        paths: allPages?.map((page) => `${page?.slug}`).filter(x => x.split("/").length === 3),
        fallback: false
    }
}