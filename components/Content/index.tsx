import React, { Children } from "react";
import styles from "./../../styles/Content.module.css";
import { ContentProps } from "../../utils/types";
import Table from "../Table";
import LinkWithPrice from "../LinkWithPrice";
import ColumnData from "../ColumnData";
import Image from "next/image";
import { contentfulLoader } from "../../utils";


export default function Content(props: ContentProps) {
    const { content, imageMap } = props;
    return content?.content?.map((data: any, mainIndex: number) => {


        return Object.keys(data).map((key) => {
            switch (key) {
                case 'paragraphs':
                    return React.Children.toArray(
                        data[key].map((para: any, contentIndex: number) => {
                            if (mainIndex === 0 && contentIndex === 0 && content?.quickLinks?.length) {
                                return <p
                                    style={{
                                        width: "60%"
                                    }}
                                >{para}</p>
                            }
                            return <p>{para}</p>
                        })
                    )
                case 'headers':
                    return React.Children.toArray(
                        data[key].map((header: any, headerIndex: number) => {
                            if (headerIndex === 0 && mainIndex === 0) {
                                return <h3
                                    style={{
                                        marginTop: 0
                                    }}
                                >{header}</h3>
                            }
                            return <h3>{header}</h3>
                        }))
                case "tableData":
                    return <Table
                        {...data[key]}
                    />
                case "indented":
                    return <div className={styles.indented}>
                        <Content
                            content={{ content: data[key] }}
                        />
                    </div>
                case "externalLinks":
                    return React.Children.toArray(data[key].map((link: any) => {
                        return <a href={link.link} className={styles.externalLink}>{
                            link.label
                        }</a>
                    }))
                case "uParagraphs":
                    return React.Children.toArray(
                        data[key].map((para: any) => {
                            return <p className={styles.underLine}>{para}</p>
                        })
                    )
                case "linkWithPrice":
                    return React.Children.toArray(
                        data[key].map((linkWithPrice: any) => {
                            return <LinkWithPrice
                                {...linkWithPrice}
                            />
                        })
                    )
                case "subHeaders":
                    return React.Children.toArray(
                        data[key].map((subHeader: string) => <h4>
                            {subHeader}
                        </h4>)
                    )
                case "columnData":
                    return <ColumnData
                        columnData={data[key]}
                    />
                case "images":
                    return <div className={styles.contentImages}>
                        {
                            React.Children.toArray(
                                data[key].map((img: string) => {
                                    console.log(imageMap, img, imageMap?.[img]);

                                    return <Image
                                        loader={contentfulLoader}
                                        className={styles.contentImage}
                                        src={imageMap?.[img] || ""}
                                        alt="Error loading image"
                                        height={291}
                                        width={1365}
                                        objectFit='contain'
                                    />
                                })
                            )
                        }
                    </div>

                default:
                    break;
            }
        })
    })
}