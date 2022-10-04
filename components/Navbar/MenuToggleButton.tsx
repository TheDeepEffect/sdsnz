import { Dispatch, SetStateAction, useRef, useState } from "react"
import styles from "./../../styles/Navbar.module.css";


type MenuToggleButtonPropType = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}
function MenuToggleButton(props: MenuToggleButtonPropType) {
    const { isOpen, setIsOpen } = props;
    const [isReverse, setIsReverse] = useState(false);
    const isToggled = useRef(false);

    return <button className={
        !isOpen || !isToggled.current ?
            styles.navbarToggleButton + ' ' + styles.menuOpen
            : isReverse ?
                styles.navbarToggleButton + ' ' + styles.reverseMenu
                : styles.navbarToggleButton
    }
        onClick={() => {
            isToggled.current = true;
            setIsReverse(isOpen)
            setIsOpen(!isOpen)
        }}
    ></button>
}

export default MenuToggleButton