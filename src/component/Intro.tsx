import Image from "next/image";
import profilePicture from "../../public/clelya-portrait-medium.png";
import cabinetPicture from "../../public/cabinet-medium.jpeg";
import styles from "@/styles/Intro.module.css";

export default function Intro() {
    return (
        <div className={styles.intro_wrapper}>
            <div className={styles.intro_title}>
                <h1>
                    Cabinet Clelya
                    <br /> Voyance et Médiumnité à Toul
                </h1>
            </div>
            <p className={styles.subtitle}>Vous souhaitez connaître votre futur ou communiquer avec le monde invisible.</p>
            <p className={styles.subtitle}>Bienvenue sur mon site.</p>
            <div className={styles.presentation_container}>
                <div className={styles.presentation_container1}>
                    <div className={styles.image_container}>
                        <Image
                            src={profilePicture}
                            alt="Photo Medium Clelya"
                            fill
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                    <p>
                        Bonjour je suis Clelya médium et voyante expérimentée basée à Toul dans le 54. Je suis heureuse de pouvoir offrir mes services
                        à des clients du monde entier.
                    </p>
                </div>
                <div className={styles.presentation_container2}>
                    <div className={styles.image_container}>
                        <Image
                            src={cabinetPicture}
                            alt="Photo Cabinet Medium Toule"
                            fill
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                    <p>
                        Je vous accueille du lundi au samedi pour des consultations sur rendez-vous dans mon cabinet situé à Toul également en visio
                        sur Wathsapp
                    </p>
                </div>
            </div>
            <p className={styles.info_citation}>Je suis impatiente de vous aider à traverser les épreuves de la vie et à découvrir votre futur.</p>
        </div>
    );
}
