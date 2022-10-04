import { PriceCardProps } from "../../utils/types";
import styles from "./../../styles/PriceCard.module.css";

export default function PriceCard(props: PriceCardProps) {
    const {
        price, title, subText
    } = props;
    return <div className={styles.priceCard}>
        <div className={styles.priceTitle}>
            {title}
        </div>
        <div className={styles.price}>{
            price
        }</div>
        <div className={styles.priceSubText}>{
            subText
        }</div>
    </div>
}