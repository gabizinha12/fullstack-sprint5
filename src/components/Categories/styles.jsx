import styled from "styled-components";

export const Navbar = styled.nav`
  padding: 0 100px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  margin-bottom: 14px;
`;
