import { ReactNode } from "react";
import styles from './../../styles/Label.module.css'

type LabelProps = {
    children: ReactNode
}
export default function Label(props: LabelProps) {
    const { children } = props;
    return <div className={styles.label}>
        {children}
    </div>
}