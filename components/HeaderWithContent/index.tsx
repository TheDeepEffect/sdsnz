import Link from "next/link";
import React from "react"
import styles from "../../styles/HeaderWithContent.module.css";
import Button from "../Button";

export default function HeaderWithContent(props: any) {
    const { headerWithContent: { content, buttonInfo } } = props
    return <div className={styles.headerWithContentContainer}>
        <div className={styles.content}>
            {
                React.Children.toArray(
                    content.map((data: any) => {
                        return <div className={styles.contentRow}>
                            <h3>{data.title}</h3>
                            <p>{data.content}</p>
                        </div>
                    })
                )
            }
        </div>
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
}