import styles from "@/styles/Home.module.css";

const nav_menu = [
    {id: "story", label: "Mon histoire"},
    {id: "method", label: "Mes méthodes"},
    {id: "session", label: "Mes séances"},
    {id: "shop", label: "Boutique"},
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
                        <a href={item.id === "shop" ? `/${item.id}` : `/#${item.id}`} onClick={() => onClose()}>
                            <h4>{item.label}</h4>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
