import styled from "styled-components";

export const Container = styled.div``;

export const ErrorMessage = styled.h1`
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  color: #721c24;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  padding: 10px;
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 9999;
`;

export const SuccessMessage = styled.h1`
  background-color: #1cef5b;
  border: 1px solid #a4d6ad;
  border-radius: 4px;
  color: #a4d6ad;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  padding: 10px;
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 9999;
`;
