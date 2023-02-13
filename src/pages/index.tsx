import Head from "next/head";
import styles from "@/styles/Home.module.css";
import NavBar from "../component/NavBar";
import Intro from "@/component/Intro";
import Story from "@/component/Story";
import Methods from "@/component/Methods";
import Session from "@/component/Session";
import BurgerMenu from "@/component/BurgerMenu";
import Footer from "@/component/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Cabinet de voyance et de médiumnité | Clelya, médium et voyante expérimentée à Toul</title>
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
            <main className={styles.main}>
                {/* <NavBar /> */}
                <BurgerMenu />
                <Intro />
                <Story />
                <Methods />
                <Session />
                <Footer />
            </main>
        </>
    );
}
