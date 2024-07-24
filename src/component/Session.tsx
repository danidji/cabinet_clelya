import styles from "@/styles/Session.module.css";
import Link from "next/link";
import {Price} from "@/pages/infos";

export default function Session() {
    return (
        <div className={styles.session_wrapper}>
            <div className={styles.anchor} id="session"></div>
            <h2>Mes séances</h2>
            <div className={styles.session_content}>
                <h3>Tarifs</h3>
                <p className={styles.prices_title}>Au cabinet ou en visio</p>
                <p className={styles.prices}>{Price["60MIN"]}€/h</p>
                <h3>Déroulement d&lsquo;une séance</h3>
                <p>
                    Les séances peuvent se faire à mon cabinet situé à Toul (54) au :<br />
                    <strong>12 Avenue de la première armée française 54200 Toul</strong>
                    <br />
                    <br />
                    ou bien par visio avec l&lsquo;application <strong>Whatsapp</strong>.
                </p>
                <p>
                    Prendre Rendez-Vous : <strong>07 63 75 72 73</strong>
                </p>
                <p>
                    <Link href={"/infos"}>Voir plus de détail sur les séances</Link>
                </p>
            </div>
        </div>
    );
}
