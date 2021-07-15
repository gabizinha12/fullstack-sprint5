import { Menu } from "../../components/Menu";
import { Search } from "../../components/Search";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Filters } from "../../components/Filters";
import { Products } from "../../components/Products";
import { Header, Main } from "../styles";
export function Home() {
  return (
    <>
      <Main>
        <Breadcrumbs />
        <Filters />
        <Products />
      </Main>
    </>
  );
}
