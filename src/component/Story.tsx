import Image from "next/image";
import outsidePicture from "../../public/clelya-portrait-exterieur.jpeg";

export default function Story() {
    return (
        <div className="StoryWrapper" id="story">
            <h2>Mon histoire</h2>
            <div className="StoryContent">
                <Image src={outsidePicture} alt="Voyance clelya extérieur" />
                <p>
                    « Depuis l’âge de 4 ans et demi, j’ai toujours été différente des autres enfants. Mes parents remarquaient que je leur disais ce
                    qui allait arriver, que je voyais des choses ou que quelqu’un me parlait. J’ai grandi en étant la seule personne de ma famille à
                    croire en ces choses surnaturelles. Mais malgré les nombreuses épreuves que j’ai dû surmonter, j’ai toujours été aidée et guidée
                    par ce monde invisible auquel je peux communiquer. C’est ainsi que j’ai commencé à faire des voyances qui se sont révélées
                    précises, en utilisant des photos, des flashs, des cartes ou tout autre support. Depuis ce jour, je n’ai jamais arrêté cette
                    magnifique expérience privilégiée. Aujourd’hui, j’ai décidé d’ouvrir mon propre cabinet pour partager mon don. »
                </p>
            </div>
        </div>
    );
}
