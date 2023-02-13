import Image from "next/image";
import outsidePicture from "../../public/clelya-portrait-interieur.jpeg";
import styles from "@/styles/Story.module.css";

export default function Story() {
    return (
        <div className={styles.story_wrapper}>
            <div className={styles.anchor} id="story"></div>
            <h2>Mon histoire</h2>
            <div className={styles.story_content}>
                <div className={styles.image_container}>
                    <Image
                        src={outsidePicture}
                        alt="Voyance clelya extérieur"
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
                <p>
                    Depuis l’âge de 4 ans et demi, j’ai toujours été différente des autres enfants. Mes parents remarquaient que je leur disais ce qui
                    allait arriver, que je voyais des choses ou que quelqu’un me parlait. J’ai grandi en étant la seule personne de ma famille à
                    croire en ces choses surnaturelles. Mais malgré les nombreuses épreuves que j’ai dû surmonter, j’ai toujours été aidée et guidée
                    par ce monde invisible auquel je peux communiquer. C’est ainsi que j’ai commencé à faire des voyances qui se sont révélées
                    précises, en utilisant des photos, des flashs, des cartes ou tout autre support. Depuis ce jour, je n’ai jamais arrêté cette
                    magnifique expérience privilégiée. Aujourd’hui, j’ai décidé d’ouvrir mon propre cabinet pour partager mon don.
                </p>
            </div>
        </div>
    );
}
