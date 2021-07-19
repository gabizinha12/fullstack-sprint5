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
