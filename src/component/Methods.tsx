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
                    <strong>La cartomancie</strong> est mon moyen privilégié pour explorer les secrets cachés dans votre passé, votre présent et votre
                    futur. J&apos;utilise des cartes à jouer pour déchiffrer les messages de l&apos;univers et vous aider à prendre des décisions
                    éclairées. Chaque lecture de cartes est unique, car elle est basée sur votre énergie et votre situation personnelle. Je suis une
                    experte dans de nombreux types de lectures de cartes différents, chacun avec ses propres règles et interprétations.
                </p>
                <p>
                    En tant que <strong>médium</strong> , j&apos;ai la capacité de communiquer avec les esprits des défunts et de leur transmettre des
                    messages. C&apos;est une capacité naturelle et surnaturelle qui me permet de faciliter la communication entre les vivants et les
                    morts. Les messages que je reçois sont toujours empreints d&apos;amour et de bienveillance et peuvent vous apporter un réconfort
                    inestimable.
                </p>
                <p>
                    <strong>La voyance</strong> est une pratique qui me permet d&apos;utiliser mes capacités extrasensorielles pour prédire
                    l&apos;avenir. Je suis une professionnelle expérimentée dans l&apos;utilisation de la clairvoyance, de la clairaudience et du
                    tarot pour aider les gens à comprendre les événements futurs qui les impactent. Mon but est de vous guider sur le chemin de votre
                    vie en vous aidant à faire des choix importants en matière d&apos;amour, de travail et de finances. Mes prédictions sont un outil
                    précieux de guidance, vous aidant à avancer avec confiance et assurance.
                </p>

                <p>
                    Je suis là pour vous aider à explorer votre avenir avec clarté et confiance. Contactez-moi pour une consultation personnalisée et
                    découvrez les merveilles que l&apos;univers a en réserve pour vous.
                </p>
            </div>
        </div>
    );
}
