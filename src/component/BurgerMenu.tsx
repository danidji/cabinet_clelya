import {useState} from "react";
import Image from "next/image";
import logoPicture from "../../public/logo-voyance.png";

import NavBar from "./NavBar";
import styles from "@/styles/Burger.module.css";

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className={`${styles.burger_menu_wrapper} ${isOpen ? "" : styles.close}`}>
            <NavBar closeMenu={() => setIsOpen(false)} />
            <button className={`${styles.burger_button} ${isOpen ? styles.open : styles.close}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    );
}
