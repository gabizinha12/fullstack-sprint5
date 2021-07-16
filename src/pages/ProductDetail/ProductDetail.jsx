import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import {
  ContainerImg,
  ProductImg,
  ContainerInfo,
  LabelDesc,
  LabelPrice,
  BoxPrice,
  Btn,
  Container,
} from "./styles";
export function ProductDetail() {
  const produtosContext = useContext(ProductsContext);
  const { id } = useParams();
  const products = produtosContext.produtos.products.filter(
    (p) => p.sku == id
  )[0];
  console.log(products);
  return (
    <>
      <Container>
        <ContainerImg>
          <ProductImg
            src={products && `../../${products.image}`}
            alt={products && products.name}
          />
        </ContainerImg>

        <ContainerInfo>
          <LabelDesc>{products && products.name}</LabelDesc>

          <p>Selecionar Tamanho: </p>

          <BoxPrice>
            <LabelPrice>R$ {products && products.price}</LabelPrice>

            <div style={{ width: "100%" }}>
              <Btn bg="#008000" mb="12">
                ADICIONAR À SACOLA
              </Btn>

              <Btn bg="#d50000">CANCELAR</Btn>
            </div>
          </BoxPrice>
        </ContainerInfo>
      </Container>
    </>
  );
}
