import styled from "styled-components";
export const Header = styled.header`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
`;
export const HeaderContainer = styled.div`
  margin: auto;
  width: 95%;
  max-width: 1200px;
`;
export const Mobile = styled.div`
  display: none;
  margin-bottom: 25px;
  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;
export const HeaderDrawer = styled.div`
  width: 24px;
  opacity: 54%;
  display: none;
  text-transform: lowercase;
  font-size: 0.5625rem;
  font-weight: 400;
  line-height: 0;

  &::active {
    display: block;
  }
`;
