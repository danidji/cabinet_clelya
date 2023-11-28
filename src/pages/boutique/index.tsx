import {useState, useEffect} from "react";
import Head from "next/head";
import Image from "next/image";

import BurgerMenu from "@/component/BurgerMenu";
import PaypalButton from "@/component/PaypalButton";
import Footer from "@/component/Footer";
import NavBar from "@/component/NavBar";

import articlePicture from "../../../public/consultation-voyance.jpg";

import styles from "@/styles/Shop.module.css";

import useDetectMobileWindow from "@/hooks/useDetectMobileWindow";

export enum Price {
    "30MIN" = 30,
    "60MIN" = 60,
}

export default function Shop() {
    const [choice, setChoice] = useState<string>("30MIN");
    const [unitPrice, setUnitPrice] = useState<number>(Price["60MIN"]);
    const [quantity, setQuantity] = useState<number>(1);
    const [totalPrice, setTotalPrice] = useState<number>(Price["60MIN"]);
    const {isMobile} = useDetectMobileWindow();

    const handleChoice = (choice: string) => {
        setChoice(choice);
        if (choice === "30MIN") {
            setUnitPrice(Price["30MIN"]);
        }
        if (choice === "60MIN") {
            setUnitPrice(Price["60MIN"]);
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
        setTotalPrice(quantity * unitPrice);
    }, [quantity, choice, unitPrice]);

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
            {isMobile ? <BurgerMenu /> : <NavBar />}
            <div className={styles.shop_page_container}>
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
                    <div className={styles.presentation_shop}>
                        <p>
                            Je vous propose une consultation de voyance personnalisée avec un paiement facile et sécurisé via PayPal. <br /> <br />
                            Pour réserver votre séance, appelez-moi au 07.63.75.72.73 pour discuter de vos besoins et de vos disponibilités. Nous
                            choisirons ensemble un jour et une heure pour votre consultation, puis vous pourrez procéder au paiement via PayPal pour
                            confirmer votre rendez-vous. <br />
                            <br />
                            Je suis impatiente de vous aider à découvrir les réponses à vos questions les plus profondes et à vous guider vers votre
                            avenir. N&apos;hésitez pas à me contacter si vous avez des questions ou des préoccupations.
                        </p>
                    </div>
                    <div className={styles.choice_session}>
                        <div className={styles.price_container}>
                            <p>Prix d&apos;une heure de séance : </p>
                            <p>{unitPrice} €</p>
                        </div>
                        <br />
                        <div className={styles.price_container}>
                            <p>La demie heure supplémentaire : </p>
                            <p>{Price["30MIN"]} €</p>
                        </div>
                        <br />
                        {/* <p>Durée : </p> */}
                        {/* <div className={styles.button_container}>
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

                        <div className={styles.paypal_buttons_container}>
                            <PaypalButton amount={totalPrice} />
                        </div> */}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
