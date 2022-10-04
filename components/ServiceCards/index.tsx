import Image from "next/image";
import Link from "next/link";
import React from "react";
import { contentfulLoader } from "../../utils";
import { ServiceCardProps } from "../../utils/types";
import Button from "../Button";
import styles from './../../styles/ServiceCard.module.css';

export default function ServiceCard(props: ServiceCardProps) {
    const {
        imageUrlId,
        label,
        price,
        paragraphs,
        buttonInfo
    } = props;
    return <div className={styles.serviceCard}>
        <div className={styles.serviceImage}>
            <Image
                loader={contentfulLoader}
                src={imageUrlId}
                height={466}
                width={540}
                objectFit={'cover'}
            />
        </div>
        <div className={styles.serviceCardContent}>
            <div className={styles.serviceHeader}>
                <h3 className={styles.serviceName}>
                    {label}
                </h3>
                <h3 className={styles.servicePrice}>
                    {price}
                </h3>
            </div>
            {
                React.Children.toArray(paragraphs.map(para => <p className={styles.serviceCardText}>
                    {para}
                </p>))
            }
            <Link
                href={buttonInfo.href}>
                <a>
                    <Button>
                        {buttonInfo.label}
                    </Button>
                </a>
            </Link>
        </div>
    </div>
}