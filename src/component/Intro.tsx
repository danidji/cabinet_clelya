import Image from "next/image";
import profilePicture from "../../public/clelya-portrait-medium.jpeg";
import cabinetPicture from "../../public/cabinet-medium.jpeg";

export default function Intro() {
    return (
        <div className="IntroWrapper">
            <h1>Cabinet Clelya Eva</h1>
            <p>Medium Voyance Cartomanice</p>
            <p>Vous souhaitez connaître votre futur ou communiquer avec le monde invisible.</p>
            <p>Bienvenue sur mon site.</p>
            <div className="PresentationContainer">
                <div className="PresentationContainer1">
                    <Image src={profilePicture} alt="Photo Medium Clelya" />
                    <p>
                        Bonjour je suis Clelya médium et voyante expérimentée basée à Toul dans le 54. Je suis heureuse de pouvoir offrir mes services
                        à des clients du monde entier.
                    </p>
                </div>
                <div className="PresentationContainer2">
                    <Image src={cabinetPicture} alt="Photo Cabinet Medium Toule" />
                    <p>
                        Je vous accueille du lundi au samedi pour des consultations sur rendez-vous dans mon cabinet situé à Toul également en visio
                        sur Wathsapp
                    </p>
                </div>
            </div>
            <div className="InfoCitation">Je suis impatiente de vous aider à traverser les épreuves de la vie et à découvrir votre futur.</div>
        </div>
    );
}
