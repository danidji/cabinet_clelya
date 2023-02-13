import Image from "next/image";
import logoPicture from "../../public/logo-cabinet-voyance.jpeg";
import styles from "@/styles/Methods.module.css";

export default function Methods() {
    return (
        <div className={styles.methods_wrapper}>
            <div className={styles.anchor} id="method"></div>
            <h2>Mes méthodes</h2>
            <div className={styles.methods_content}>
                <p>
                    <strong>La cartomancie</strong> est une forme de divination qui utilise des cartes, généralement des cartes à jouer, pour révéler
                    des informations sur le passé, le présent et le futur d’une personne. Ces cartes sont interprétées par le cartomancien, il existe
                    de nombreux types de lectures de cartes différents, chacun avec ses propres règles et interprétations.
                </p>
                <p>
                    <strong>La mediumnité</strong> est la faculté de communiquer entre les vivants et les morts, de faire passer des messages des
                    esprits et des défunts par des moyens surnaturels.
                </p>
                <p>
                    <strong>La voyance</strong> est une pratique qui emploie des méthodes extrasensorielles telles que la clairvoyance, la
                    clairaudience et le tarot pour prédire l’avenir. Les voyants, des professionnels de la discipline, utilisent ces capacités pour
                    aider les gens à comprendre les événements futurs qui les impactent, notamment en matière d’amour, de travail et de finances.
                    Cette pratique est souvent considérée comme un outil précieux de guidance, aidant les individus à faire des choix importants dans
                    leur vie
                </p>
            </div>
        </div>
    );
}
