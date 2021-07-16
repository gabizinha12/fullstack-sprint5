import React from "react";
import {
  MobileVersion,
  DesktopVersion,
  Logo,
  Drawer,
  DrawerIcon,
  DrawerText,
} from "./styles";
import MenuIcon from "../../assets/menu.svg";
import CloseIcon from "../../assets/close.svg";
import LogoResponsiveIcon from "../../assets/rchlo.svg";
import LogoIcon from "../../assets/riachuelo.svg";
import { Categories } from "../Categories/Categories";
export function Menu() {
  return (
    <>
      <DesktopVersion active>
        {/* <Logo>
          <LogoImg src={LogoIcon} />
        </Logo> */}
      </DesktopVersion>
      <MobileVersion inactive>
        <Drawer active>
          <DrawerIcon src={MenuIcon} alt="menu" />
          <DrawerText>menu</DrawerText>
        </Drawer>

        <Drawer>
          <DrawerIcon src={CloseIcon} alt="fechar menu" />
          <DrawerText>fechar</DrawerText>
        </Drawer>

        <Logo src={LogoResponsiveIcon} />
      </MobileVersion>
      <Categories />
    </>
  );
}

export default Menu;
