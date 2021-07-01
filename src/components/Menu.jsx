import { useContext } from "react";
import CategoriesContext from "../contexts/CategoriesContext";

function MenuItem({ label }) {
    return (
        <li className="menu__item">
            <a className="menu__link" href="#home">
                <span>{label}</span>
            </a>
        </li>
    );
}

function Menu() {
    const { categories } = useContext(CategoriesContext);

    return (
        <nav className="header__menu menu">
            <ul className="menu__list">
                {categories.all && categories.all.map(m => <MenuItem key={m.id} label={m.label} />)}
            </ul>
        </nav>
    );
}

export default Menu;