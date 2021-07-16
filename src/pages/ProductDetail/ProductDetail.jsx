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
  const [tamanhos, selectTamanho] = useState([]);
  const products = produtosContext.produtos.products.filter(
    (p) => p.sku == id
  )[0];

  console.log(products);
  useEffect(() => {
    const name = products ? products.name : "";
    const tamanhos = name
      .substr(name.indexOf("Tam"))
      .replace("Tam", "")
      .replaceAll(" ", "")
      .split("a")
      .map((t) => parseInt(t));
    const arr = [];
    for (let i = tamanhos[0]; i < tamanhos[1]; i++) {
      arr.push(parseInt(i));
    }
    selectTamanho(arr);
  }, []);
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
          <div>
            <p>Selecionar Tamanho: </p>
            {tamanhos.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>

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
