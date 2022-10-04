import Link from "next/link";
import { LinkWithPriceProps } from "../../utils/types";
import styles from "./../../styles/LinkWithPrice.module.css";

export default function LinkWithPrice(props: LinkWithPriceProps) {
    const { link, rContent, lContent } = props;
    return <Link href={link}>
        <a>
            <div className={styles.linkWithPrice}>
                <div className={styles.lContent}>
                    <p>
                        {lContent}
                    </p>
                </div>
                <div className={styles.rContent}>
                    <p>
                        {rContent}
                    </p>
                </div>
            </div>
        </a>
    </Link>
}