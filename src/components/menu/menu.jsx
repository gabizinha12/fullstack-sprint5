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
export function Menu() {
  return (
    <>
      <DesktopVersion active>
        <Logo>
          <a href="/">{LogoIcon}</a>
        </Logo>
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

        <Logo>{LogoResponsiveIcon}</Logo>
      </MobileVersion>
    </>
  );
}

export default Menu;
