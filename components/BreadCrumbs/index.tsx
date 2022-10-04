import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BreadCrumbsProps } from "../../utils/types";
import styles from "./../../styles/BreadCrumbs.module.css";

export default function BreadCrumbs(props: BreadCrumbsProps) {
    const router = useRouter();
    const { crumbs } = props;
    return crumbs?.length ? <div className={styles.breadCrumbs}>
        <ul>
            {React.Children.toArray(crumbs.map((x, i) => {

                return <li>

                    {i !== (crumbs.length - 1) ?
                        <Link
                            href={x.href}
                        >
                            <a>
                                {x.label}
                            </a>
                        </Link>
                        : <div className={styles.disableCrumbs}>
                            {x.label}
                        </div>
                    }
                </li>
            }
            ))}
        </ul>
    </div> : <></>
}