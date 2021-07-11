import styled from "styled-components";

export const Footer = styled.footer`
  border-top: 2px solid lightgray;
  padding-top: 40px;
  width: 100%;
`;
export const FooterContact = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  line-height: 50px;
  text-transform: uppercase;
  font-size: 0.8125rem;
`;
export const FooterContainer = styled.div`
  margin: 0 auto;
  width: 90%;
`;
export const ContactInfo = styled.p`
  height: 50px;
  line-height: 50px;
  text-transform: uppercase;
  font-size: 0.8125rem;
`;
export const ContactInput = styled.input`
  height: 24px;
  line-height: 24px;
  border: 0px;
  border-bottom: 1px solid rgba(38, 30, 30, 0.42);
  outline: none;
  width: 300px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #000;
`;
