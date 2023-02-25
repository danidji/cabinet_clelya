import ReactModal from "react-modal";
import Image from "next/image";
import styles from "@/styles/Modal.module.css";

import iconClose from "../../public/close.svg";

interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
}

export default function Modal({isOpen, closeModal}: ModalProps) {
    return (
        <ReactModal isOpen={isOpen} ariaHideApp={false} onRequestClose={closeModal} className={styles.modal} overlayClassName={styles.overlay_modal}>
            <div className={styles.header_modal}>
                <button onClick={closeModal}>
                    <Image src={iconClose} width={35} height={35} alt="close" />
                </button>
            </div>
            <div className={styles.modal_content}>
                <h4>Comment puis je vérifier l&apos;état de ma commande ?</h4>
                <p>
                    Après qu&apos;une commande ait été passée, vous allez recevoir un email de confirmation de rendez-vous dans les 12h qui suivent.
                    Vous pouvez nous contacter pendant les premières 48 heures pour un remboursement complet sans raisons particulières.
                </p>
                <h4>Comment passer une commande ?</h4>
                <p>
                    Choisissez simplement vos consultations dans le menu déroulant sur la page du produit et cliquez sur le bouton &quot;Acheter
                    maintenant&quot;, puis suivez les étapes pour compléter votre commande. Nous préparerons celle-ci et vous enverrons un émail de
                    confirmation pour l&apos;heure de rendez-vous ! Vous pouvez aussi me contacter avant pour réserver la séance puis vous devrez
                    payer sur le site avant votre séance.
                </p>
                <h4>Quel méthode de paiement acceptez vous ? </h4>
                <p>
                    Nous acceptons carte de crédit Visa et Mastercard. Vous pouvez aussi payer par Paypal. Pour paiement avec une carte Aurore, Carte
                    Bancaire, Maestro et autre carte de débit il faut faire le paiement en passant par Paypal même si vous n&apos;avez pas de compte.
                    Pour ce faire, vous n&apos;avez qu&apos;à cliquer sur le bouton Paypal. Vous pourrez ensuite sélectionner « Payer par carte de
                    crédit ou carte de débit Visa » sur la page suivante. Ensuite, vous entrez votre pays (France), et dans le type de carte, vous
                    pourrez sélectionner votre carte N’hésitez pas à me contacter si vous avez des questions!
                </p>
            </div>
        </ReactModal>
    );
}
