import styles from "@/styles/Home.module.css";

const nav_menu = [
    {id: "story", label: "Mon histoire"},
    {id: "method", label: "Mes méthodes"},
    {id: "session", label: "Mes séances"},
];

export default function NavBar() {
    return (
        <div className={styles.navbar_wrapper}>
            <ul>
                {nav_menu.map((item, id) => (
                    <li key={`nav-menu-${id}`}>
                        <a href={`#${item.id}`}>
                            <h4>{item.label}</h4>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
