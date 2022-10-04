import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { contentfulLoader } from "../../utils";
import useWindowSize from "../../utils/useWindowSize";
import styles from "./../../styles/Navbar.module.css";
import Item from "./Item";
import MenuToggleButton from "./MenuToggleButton";

function Navbar(props: PropsWithChildren) {
    const { children } = props;
    const [isOpen, setIsOpen] = useState(false);
    const { width } = useWindowSize();

    const isBiggerScreen = useMemo(() => {
        return width && width > 768;
    }, [width]);

    const isHideMenuitem = useMemo(() => {
        return !isOpen && !isBiggerScreen
    }, [isBiggerScreen, isOpen]);

    return <nav className={styles.navbar}>
        <MenuToggleButton
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
        <div className={styles.navbarLogo}>
            <Link href={'/'}>
                <a>

                    <Image
                        loader={contentfulLoader}
                        src='/images/sdsnz-logo-cropeed.png'
                        height={80}
                        width={80}
                    />
                </a>
            </Link>
        </div>
        <div className={
            !isHideMenuitem ? styles.navbarMenus + ' ' + styles.showMenuItem :
                styles.navbarMenus
        }
        >
            <ul>
                {children}
            </ul>
        </div>
        <div className={
            !isHideMenuitem ? styles.navbarSearch + ' ' + styles.showMenuItem :
                styles.navbarSearch
        }>
            <Item
                href={'/contact'}
                title={'Contact Us'}
            />
        </div>
    </nav>
}
Navbar.Item = Item;
export default Navbar