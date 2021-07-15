import { CategoriasContext } from "../../contexts/CategoriasContext";
import { CategoriesItem } from "./CategoriesItem/CategoriesItem";
import { Navbar, UnorderedList } from "./styles";

export function Categories() {
  const categorias = useContext(CategoriasContext);

  return (
    <Navbar>
      <UnorderedList>
        {categorias.categorias.all.map((el) => (
          <CategoriesItem key={el.id} label={el.label} link={el.link} />
        ))}
      </UnorderedList>
    </Navbar>
  );
}
