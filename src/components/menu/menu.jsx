import React, { useContext } from "react";
import { CategoriasContext } from "../../contexts/CategoriasContext";
import MenuItem from "./MenuItem/MenuItem";
import { CategoriesNavbar, UnorderedList } from "./styles";

function Menu() {
  const categorias = useContext(CategoriasContext);
  return (
    <CategoriesNavbar>
      <UnorderedList>
        {categorias.categorias.all.map((el) => (
          <MenuItem key={el.id} label={el.label} link={el.link} />
        ))}
      </UnorderedList>
    </CategoriesNavbar>
  );
}

export default Menu;
