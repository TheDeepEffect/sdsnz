import React from "react";
import Link from "next/link";
import styles from "./../../styles/QuickLinks.module.css";
import { Maybe, Scalars } from "../../lib/schema";

export default function QuickLinks(props: Maybe<Scalars['JSON']>) {
    const { content } = props;
    return <div className={styles.quickLinks}>
        <h3>Quick Links</h3>
        {React.Children.toArray(content.quickLinks.map((link: any) => {
            return <Link
                href={link.href}
            >
                <a>
                    {link.label}
                </a>
            </Link>
        }))}
    </div>
}