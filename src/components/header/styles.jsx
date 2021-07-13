import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.body};
`;

export const Container = styled.div`
  margin: auto;
  width: 95%;
  max-width: 1200px;
`;

export const Mobile = styled.div`
  display: ${(props) => (props.inactive ? "none" : "flex")};
  margin-bottom: 25px;
  align-items: center;
  @media (max-width: 1200px) {
    display: ${(props) => (props.inactive ? "flex" : "none")};
    margin-bottom: 0;
  }
`;

export const Desktop = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  justify-content: center;
  padding-top: 5px;
  @media (max-width: 1200px) {
    display: ${(props) => (props.active ? "none" : "flex")};
  }
`;

export const Search = styled.div`
  position: relative;
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

export const SearchImg = styled.img`
  width: 24px;
  opacity: 26%;
  top: 8px;
  position: absolute;
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.26);
  line-height: 40px;
`;

export const SearchInput = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  padding-left: 40px;
`;
