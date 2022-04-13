import { faBars, faCarSide } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import styles from "./Navbar.module.css";
import NavItem from "./NavItem";

type Props = {
    children: ReactNode
}

function Navbar({ children }: Props) {
    const [menuVisible, setMenuVisible] = useState(false);

    const router = useRouter();

    const isSelected = useMemo(() => {
        if (router.asPath === "/") {
            return true
        }
        return false
    }, [router.asPath])
    const selectedClassName = useMemo(() => {
        if (isSelected) {
            return `${styles.logo} text-green`
        }
        return styles.logo
    }, [isSelected]);
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_content}>
                <div className={selectedClassName}>
                    <Link href="/">
                        <a>
                            SDSNZ
                            {isSelected ?
                                <FontAwesomeIcon icon={faCarSide} className={styles.car} />
                                : ""
                            }
                        </a>
                    </Link>
                </div>
                <div className={styles.toggle}>
                    <FontAwesomeIcon icon={faBars}
                        onClick={() => setMenuVisible(state => !state)}
                    />
                </div>
                <ul className={`${styles.menus} ${menuVisible ? 'block' : 'hidden'}`}>
                    {children}
                </ul>
            </div>
        </nav>
    )
}
Navbar.NavItem = NavItem
export default Navbar