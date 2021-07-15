import searchIcon from "../../assets/search.svg";
import { Container, SearchIcon, SearchInput } from "./styles";

export function Search() {
  return (
    <Container>
      <SearchIcon src={searchIcon} />
      <SearchInput type="search" placeholder="O que está procurando?" />
    </Container>
  );
}
