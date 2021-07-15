import styled from "styled-components";

export const MobileVersion = styled.div`
  display: ${(props) => (props.inactive ? "none" : "flex")};
  margin-bottom: 25px;
  align-items: center;
  @media (max-width: 1200px) {
    display: ${(props) => (props.inactive ? "flex" : "none")};
    margin-bottom: 0;
  }
`;

export const DesktopVersion = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  justify-content: center;
  padding-top: 5px;
  @media (max-width: 1200px) {
    display: ${(props) => (props.active ? "none" : "flex")};
  }
`;

export const Logo = styled.h1`
  height: 70px;
  line-height: 70px;
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const LogoImg = styled.img`
  height: 25px;
  transform: translateY(10px);
  padding-top: 10px;
`;

export const LogoTheme = styled(LogoImg)`
  filter: ${({ theme }) => theme.filter};
`;

export const Drawer = styled.div`
  width: 24px;
  opacity: 54%;

  display: ${(props) => (props.active ? "none" : "block")};
  @media (max-width: 1200px) {
    display: ${(props) => (props.active ? "block" : "none")};
  }
`;

export const DrawerIcon = styled.img``;

export const DrawerText = styled.p`
  text-transform: lowercase;
  font-size: 0.5625rem;
  font-weight: 400;
  line-height: 0;
`;
