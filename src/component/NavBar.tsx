import styles from "@/styles/Home.module.css";
import navStyles from "@/styles/NavBar.module.css";

const nav_menu = [
    {id: "story", label: "Mon Histoire"},
    {id: "method", label: "Mes Méthodes"},
    {id: "session", label: "Mes Séances"},
    {id: "infos", label: "Infos"},
];

export default function NavBar({closeMenu}: {closeMenu?: () => void}) {
    const onClose = () => {
        if (closeMenu) closeMenu();
    };
    return (
        <div className={styles.navbar_wrapper}>
            <ul>
                {nav_menu.map((item, id) => (
                    <li key={`nav-menu-${id}`}>
                        <a href={item.id === "infos" ? `/${item.id}` : `/#${item.id}`} onClick={() => onClose()} className={navStyles.text}>
                            <h4>{item.label}</h4>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
