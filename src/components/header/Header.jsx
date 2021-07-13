import React, { useContext, useEffect } from "react";
import { CategoriasContext } from "../../contexts/CategoriasContext";
import { useFetch } from "../../hooks/useFetch";
// icons
import MenuIcon from "../../assets/menu.svg";
import CloseIcon from "../../assets/close.svg";
import LogoResposiveIcon from "../../assets/rchlo.svg";
import LogoIcon from "../../assets/riachuelo.svg";
import SearchIcon from "../../assets/search.svg";
import {
  Header as HeaderComponent,
  Container,
  Mobile,
  Desktop,
  Search,
  Logo,
  LogoImg,
  Drawer,
  DrawerIcon,
  DrawerText,
  SearchImg,
  SearchInput,
} from "./styles";
// components
import Menu from "../Menu/Menu";

export function Header() {
  const categoriasData = useContext(CategoriasContext);
  const { categorias, setCategorias } = categoriasData;
  const [response, loading, error] = useFetch(
    "http://localhost:3000/data/categories.json"
  );

  useEffect(() => {
    setCategorias({
      ...categorias,
      all: response ? response.all : [],
      current: response ? response.current : [],
    });
  }, [response, error]);
  return (
    <HeaderComponent>
      <Container>
        <Mobile inactive>
          <Drawer active>
            <DrawerIcon src={MenuIcon} alt="menu" />
            <DrawerText>menu</DrawerText>
          </Drawer>

          <Drawer>
            <DrawerIcon src={CloseIcon} alt="fechar menu" />
            <DrawerText>fechar</DrawerText>
          </Drawer>

          <Logo>
            <LogoImg src={LogoResposiveIcon} alt="Logo Riachuelo" />
          </Logo>
        </Mobile>

        <Desktop active>
          <Logo>
            <LogoImg src={LogoIcon} alt="Logo Riachuelo" />
          </Logo>
        </Desktop>

        <Search>
          <SearchImg src={SearchIcon} alt="lupa" />

          <SearchInput
            type="search"
            placeholder="O que você está procurando?"
          />
        </Search>

        <Menu />
      </Container>
    </HeaderComponent>
  );
}

export default Header;
