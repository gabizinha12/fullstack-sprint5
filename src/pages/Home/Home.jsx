import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Filters } from "../../components/Filters/Filters";
import { Products } from "../../components/Products/Products";
import { Header, Main } from "./styles";
export function Home() {
  return (
    <>
      <Header />
      <Main>
        <Products />
      </Main>
    </>
  );
}
