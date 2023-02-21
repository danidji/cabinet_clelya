import styles from "@/styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <div className={styles.footer_wrapper}>
            <div className={styles.line}></div>
            <Link href="/">Cabinet Clelya</Link>
            <Link href="/mentions-legales">Mentions Légales</Link>
        </div>
    );
}
