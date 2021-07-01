function FilterItem({ label }) {
    return (
        <li className="filters__item">
            <span className="filters__label">{label}</span>
            <img className="filters__img" src="assets/filter.svg" alt="filtro" />
        </li>
    );
}

function Filters({ filters }) {
    return (
        <section className="main__filters filters">
            <ul className="filters__list">
                {filters.map(f => <FilterItem key={f.id} label={f.label} />)}
            </ul>
        </section>
    );
}

export default Filters;