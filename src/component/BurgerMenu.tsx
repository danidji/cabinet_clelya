import {useState} from "react";

import NavBar from "./NavBar";
import styles from "@/styles/Burger.module.css";

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    console.log(styles);

    return (
        <div className={`${styles.burger_menu_wrapper} ${isOpen ? styles.close : ""}`}>
            <NavBar />
            <button className={`${styles.burger_button} ${isOpen ? styles.close : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    );
}
