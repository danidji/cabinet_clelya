import Head from "next/head";
import BurgerMenu from "@/component/BurgerMenu";

import styles from "@/styles/LegalMentions.module.css";
import Footer from "@/component/Footer";

export default function LegalsMentions() {
    return (
        <>
            <Head>
                <title>Mentions Légales</title>
                <meta
                    name="description"
                    content="Découvrez les services de Clelya, médium et voyante expérimentée, basée à Toul, pour connaître votre futur ou communiquer avec le monde invisible. Consultations sur rendez-vous en cabinet ou en visio sur Whatsapp."
                />
                <meta name="keywords" content="Clelya, voyante, Toul, mentions légales" />
                <meta name="author" content="Clelya Peter" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.page_container}>
                <BurgerMenu />
                <h1>Mentions légales</h1>
                <h2>I. Présentation du site</h2>
                <p>
                    Le site web accessible à l&apos;adresse cabinet-clelya-voyance.com (ci-après le &ldquo;Site&ldquo;) est édité par Clelya Peter,
                    dont l&apos;activité est la pratique de la voyance.
                </p>
                <h2>II. Mentions relatives à Clelya Peter</h2>
                <p>
                    Nom et prénom : Clelya Peters <br />
                    Adresse : 12 avenue de la 1ere armée française 54200 Toul <br />
                    Téléphone : 07 63 75 72 73 <br />
                    Adresse e-mail : cab.clelya.eva@gmail.com <br />
                    Numéro de SIRET : 34169511200027
                </p>
                <h2>III. Mentions relatives à l&apos;hébergement du Site</h2>
                <p>
                    Le Site est hébergé par Netlify <br />
                    Site web de l&apos;hébergeur : <a href="https://www.netlify.com/">netlify.com</a>
                </p>
                <h2>IV. Propriété intellectuelle</h2>
                <p>
                    Le Site, ainsi que tous les éléments qui le composent (notamment les textes, images, photographies, logos, marques, etc.) sont la
                    propriété exclusive de Clelya Peter et/ou de ses partenaires et sont protégés par les lois françaises et internationales relatives
                    à la propriété intellectuelle. Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale
                    ou partielle du Site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit, est interdite, sauf
                    autorisation expresse et préalable de Clelya Peter.
                </p>
                <h2>V. Données personnelles</h2>
                <p>
                    Clelya Peter ne collecte aucune donnée personnelle sur les utilisateurs du Site, à l&apos;exception des données de paiement
                    nécessaires pour l&apos;utilisation du bouton Paypal. Clelya Peter s&apos;engage à respecter la confidentialité des données
                    transmises par les utilisateurs.
                </p>
                <h2>VI. Conditions d&apos;utilisation</h2>
                <p>
                    L&apos;utilisation du Site est soumise aux présentes mentions légales. En accédant au Site, l&apos;utilisateur accepte les
                    présentes conditions d&apos;utilisation.
                </p>
                <h2>VII. Tarifs et paiement</h2>
                <p>
                    Les tarifs des séances proposées par Clelya Peter sont indiqués sur le Site. Le paiement s&apos;effectue via le système de
                    paiement en ligne Paypal. Clelya Peter ne collecte aucune donnée bancaire des utilisateurs. Les conditions générales
                    d&apos;utilisation de Paypal sont applicables pour toute transaction effectuée sur le Site.
                </p>
                <h2>VIII. Limitation de responsabilité</h2>
                <p>
                    Clelya Peter s&apos;efforce de maintenir le Site accessible et à jour. Toutefois, Clelya Peter ne garantit pas l&apos;exactitude,
                    la complétude ou l&apos;adéquation des informations contenues sur le Site. Clelya Peter ne pourra être tenue responsable de tout
                    dommage direct ou indirect résultant de l&apos;utilisation ou de l&apos;impossibilité d&apos;utiliser le Site.
                </p>
                <h2>IX. Droit applicable et juridiction compétente</h2>
                <p>
                    Les présentes mentions légales sont soumises au droit français. Tout litige relatif à l&apos;interprétation ou à l&apos;exécution
                    des présentes mentions légales sera soumis à la compétence exclusive des tribunaux français.
                </p>
                <h2>X. Contact</h2>
                <p>
                    Pour toute question ou information relative aux présentes mentions légales, l&apos;utilisateur peut contacter Clelya Peter à
                    l&apos;adresse e-mail <strong>cab.clelya.eva@gmail.com</strong>.
                </p>
                <Footer />
            </div>
        </>
    );
}
