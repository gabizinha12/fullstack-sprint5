import { useContext } from "react";
import CategoriesContext from "../../../contexts/CategoriesContext";

function BreadcrumbItem({ link, label }) {
    return (
        <li className="breadcrumbs__item">
            { link ?
                <>
                    <a className="breadcrumbs__link" href={link}>{label}</a>
                    <span className="breadcrumbs__item  breadcrumbs__separator">/</span>
                </>
                :
                <span className="breadcrumbs__link">{label}</span>
            }
        </li>
    );
}

function Breadcrumbs() {
    const { categories } = useContext(CategoriesContext);

    return (
        <section className="main__breadcrumbs breadcrumbs">
            <nav>
                <ol className="breadcrumbs__list">
                    {categories.current && categories.current.map(c => <BreadcrumbItem key={c.id} link={c.link} label={c.label} />)}
                </ol>
            </nav>
        </section>
    )
}

export default Breadcrumbs;