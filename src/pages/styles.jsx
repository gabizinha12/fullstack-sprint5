import styled from "styled-components";

export const Header = styled.section`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.body};
  margin-bottom: 16px;
`;
export const Main = styled.section`
  margin: 0 auto;
  width: 80%;
  max-width: 1100px;
`;

export const Footer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: auto;
`;

export const NotFound = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
