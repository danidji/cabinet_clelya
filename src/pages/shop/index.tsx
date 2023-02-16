import {useState, useEffect} from "react";
import Head from "next/head";
import Image from "next/image";
import BurgerMenu from "@/component/BurgerMenu";
import articlePicture from "../../../public/consultation-voyance.jpg";

import styles from "@/styles/Shop.module.css";

export default function Shop() {
    const [choice, setChoice] = useState<string>("30MIN");
    const [unitPrice, setUnitPrice] = useState<number>(60);
    const [quantity, setQuantity] = useState<number>(1);
    const [totalPrice, setTotalPrice] = useState<number>(60);

    const handleChoice = (choice: string) => {
        setChoice(choice);
        if (choice === "30MIN") {
            setUnitPrice(60);
        }
        if (choice === "60MIN") {
            setUnitPrice(90);
        }
    };

    const addQuantity = () => {
        setQuantity(quantity + 1);
    };

    const substractQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    useEffect(() => {
        if (choice === "30MIN" && quantity === 2) {
            setTotalPrice(90);
        } else {
            setTotalPrice(quantity * unitPrice);
        }
    }, [quantity, unitPrice, choice]);

    return (
        <>
            <Head>
                <title>Boutique</title>
                <meta
                    name="description"
                    content="Découvrez les services de Clelya, médium et voyante expérimentée, basée à Toul, pour connaître votre futur ou communiquer avec le monde invisible. Consultations sur rendez-vous en cabinet ou en visio sur Whatsapp."
                />
                <meta name="keywords" content="Clelya, médium, voyante, Toul, consultation, visio, cartomancie, mediumnité, voyance" />
                <meta name="author" content="Nom de l'auteur" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.shop_page_container}>
                <BurgerMenu />
                <div className={styles.shop_content}>
                    <h1>Consultation Voyance</h1>
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
                    <div className={styles.choice_session}>
                        <div className={styles.price_container}>
                            <p>Prix de la séance : </p>
                            <p>{unitPrice} €</p>
                        </div>
                        <p>Durée : </p>
                        <div className={styles.button_container}>
                            <button
                                className={`${styles.choice_button} ${choice === "30MIN" ? styles.active : null}`}
                                onClick={() => handleChoice("30MIN")}
                            >
                                30 min
                            </button>
                            <button
                                className={`${styles.choice_button} ${choice === "60MIN" ? styles.active : null}`}
                                onClick={() => handleChoice("60MIN")}
                            >
                                1 h
                            </button>
                        </div>
                        <div className={styles.price_quantity_content}>
                            <p>Quantité :</p>
                            <div className={styles.quantity_container}>
                                <div className={styles.price_quantity}>
                                    <button onClick={substractQuantity}>-</button>
                                    <div className={styles.quantity}>{quantity}</div>
                                    <button onClick={addQuantity}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.total_price}>
                            <p>Total :</p>
                            <p>{totalPrice} €</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
