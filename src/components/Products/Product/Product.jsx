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
  // console.log(sku);
  return (
    <ListItem>
      <ItemFigure key={sku}>
        <Link to={`/product-detail/${sku}`}>
          <ItemImage src={image} alt="Produto" />
          <ItemFigcaption>{name}</ItemFigcaption>
          <p className="card__description">{description}</p>
          <ItemPrice>
            <span>R$ {price}</span>
          </ItemPrice>
        </Link>
      </ItemFigure>
    </ListItem>
  );
}

export default Product;
