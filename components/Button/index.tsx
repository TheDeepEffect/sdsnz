import { ButtonHTMLAttributes } from "react";
import styles from "./../../styles/Button.module.css"

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    const { children, ...rest } = props;
    return <button className={styles.btn}
        {...rest}
    >{children}</button>
}