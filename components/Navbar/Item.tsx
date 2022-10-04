import Link from "next/link";
import { useRouter } from "next/router";
import { NavItemProps } from "../../utils/types";
import styles from "./../../styles/Navbar.module.css";

function Item(props: NavItemProps) {
    const { href, title } = props;
    const router = useRouter();

    const isSelected = href === '/' ? router.asPath === href :
        typeof href === 'string' && router.asPath.split('/').includes(href.split('/')[1]);


    return <li
        className={isSelected ? styles.selected : ''}
    >
        <Link href={href}>
            <a>
                {title}
            </a>
        </Link>
    </li>
}

export default Item;