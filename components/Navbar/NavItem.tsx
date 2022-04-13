import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import styles from "./Navbar.module.css";

type Props = {
    href: string,
    title: string
}
export default function NavItem(props: Props) {
    const { href, title } = props;
    const router = useRouter();


    const isSelected = useMemo(() => {
        if (router.asPath === href) {
            return true;
        }
        return false;
    }, [router.asPath, href]);

    const selectedClassName = useMemo(() => {
        if (isSelected) {
            return `${styles.menu}  ${styles.selected}`
        }
        return styles.menu
    }, [isSelected]);
    return (
        <li className={selectedClassName}>
            <Link href={href}
            >
                <a>
                    {title}
                    {isSelected ?
                        <FontAwesomeIcon icon={faCarSide} className={styles.car} />
                        : ""
                    }
                </a>
            </Link>
        </li>
    )
}