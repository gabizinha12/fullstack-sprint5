import styled from "styled-components";

export const ListItem = styled.li`
  flex-basis: 24%;
  text-align: center;
  font-size: 0.625rem;
  line-height: 1.5;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1px 1px 10px 1px;
  cursor: pointer;
  background-color: white;
  &:hover {
    box-shadow: -3px 10px 10px -10px #c0c0c0;
  }
`;

export const ItemFigure = styled.figure``;

export const ItemLink = styled.a``;

export const ItemImage = styled.img`
  width: 100%;
`;

export const ItemFigcaption = styled.figcaption`
  text-transform: uppercase;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 10px;
  line-height: 1.3;
  font-weight: 400;
`;

export const ItemPrice = styled.figcaption`
  padding-bottom: 8px;
  span {
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
  }
`;
