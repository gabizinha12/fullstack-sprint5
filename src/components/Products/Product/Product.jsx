import React from "react";
import { Link } from "react-router-dom";
import {
  ListItem,
  ItemFigure,
  ItemLink,
  ItemImage,
  ItemFigcaption,
  ItemPrice,
} from "./styles";
function Product({ description, image, price, name, sku }) {
  // const img = require(`../../${image}`);
  return (
    <ListItem>
      <ItemFigure key={sku}>
        <ItemLink to={`/product/${sku}`}>
          <ItemImage src={image} alt="Produto" />
        </ItemLink>
        <ItemFigcaption>{name}</ItemFigcaption>
        <p className="card__description">{description}</p>
        <ItemPrice>
          <span>R$ {price}</span>
        </ItemPrice>
      </ItemFigure>
    </ListItem>
  );
}

export default Product;
