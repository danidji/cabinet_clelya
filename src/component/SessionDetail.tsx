import Image from "next/image";

import styles from "@/styles/Shop.module.css";
import articlePicture from "../../public/consultation-voyance.jpg";

export default function SessionDetail() {
    return (
        <div className={styles.shop_page_container}>
            <div className={styles.shop_content}>
                <div className={styles.image_container}>
                    <Image
                        src={articlePicture}
                        alt="Consultation voyance Toul"
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                    />
                    <div className={styles.infos_wrapper}></div>
                    <div className={styles.infos_text}>
                        <p>Séance à mon cabinet</p>
                        <p>ou</p>
                        <p>en visio</p>
                    </div>
                </div>
                <div className={styles.presentation_shop}>
                    <h2>Séances au Cabinet</h2>
                    <p>
                        Profitez d&apos;une séance en personne dans notre cabinet pour 60 euros, offrant une consultation approfondie d&apos;une
                        heure.
                    </p>

                    <h2>Séances en Visio avec Paylib</h2>
                    <p>Optez pour la flexibilité avec nos séances en visio. Choisissez la durée qui vous convient, avec des tarifs clairs :</p>
                    <br />
                    <ul className={styles.ul_price}>
                        <li>
                            <span className={styles.span_text}>8 min : 18,90€</span>
                        </li>
                        <li>
                            <span className={styles.span_text}>15 min : 29,90€</span>
                        </li>
                        <li>
                            <span className={styles.span_text}>30 min : 57,90€</span>
                        </li>
                    </ul>

                    <p>
                        Pour réserver votre séance, appelez-moi au <span className={styles.span_text}>07.63.75.72.73</span> pour discuter de vos
                        besoins et de vos disponibilités. Nous choisirons ensemble un jour et une heure pour votre consultation, puis vous pourrez
                        procéder au paiement via Paylib pour confirmer votre rendez-vous.
                    </p>

                    <h2>Extension du Temps en Visio</h2>
                    <p>Prolongez votre expérience en ajoutant du temps à votre séance en visio, à des tarifs flexibles.</p>

                    <p>Explorez le monde mystérieux de la voyance avec simplicité, et laissez-vous guider par nos consultations authentiques.</p>
                    <p>
                        Je suis impatiente de vous aider à découvrir les réponses à vos questions les plus profondes et à vous guider vers votre
                        avenir. N&apos;hésitez pas à me contacter si vous avez des questions ou des préoccupations.
                    </p>
                </div>
            </div>
        </div>
    );
}
