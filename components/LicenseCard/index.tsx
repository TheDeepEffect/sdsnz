import Image from "next/image";
import Link from "next/link";
import React from "react";
import { contentfulLoader } from "../../utils";
import { LicenseCardProp } from "../../utils/types";
import Button from "../Button";
import styles from "./../../styles/LicenseCard.module.css";

export default function LicenseCard(props: LicenseCardProp) {
    const {
        imageUrlId,
        label,
        buttonInfo,
        paragraphs
    } = props;
    return <div className={styles.licenseCard}>
        <div className={styles.licenseImage}>
            <Image
                loader={contentfulLoader}
                src={imageUrlId}
                height={494}
                width={579}
                objectFit={'cover'}
            />
        </div>
        <div className={styles.licenseHeader}>
            <h3>{label}</h3>
        </div>
        <div className={styles.licenseContent}>
            {React.Children.toArray(paragraphs.map((para: any) => <p>{para}</p>))}
            <Link
                href={buttonInfo.href}
            >
                <a>
                    <Button>
                        {buttonInfo.label}
                    </Button>
                </a>
            </Link>
        </div>
    </div>
}