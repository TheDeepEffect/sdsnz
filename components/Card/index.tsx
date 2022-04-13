import type { ReactNode } from "react";
import styles from "./Card.module.css";

type Props = {
    children: ReactNode
}
function Card(props: Props) {
    const { children } = props;
    return <div
        className={styles.card}
    >
        {children}

    </div>
}

export default Card