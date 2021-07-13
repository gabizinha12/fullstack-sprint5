import React from "react";
import {
  ListItem,
  ItemFigure,
  ItemLink,
  ItemImage,
  ItemFigcaption,
  ItemPrice,
} from "./styles";
function Product({ description, image, price, name }) {
  // const img = require(`../../${image}`);
  return (
    <ListItem>
      <ItemFigure>
        <ItemLink>
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
