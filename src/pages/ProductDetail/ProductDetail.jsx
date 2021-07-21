import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useHistory } from "react-router-dom";
import {
  ContainerImg,
  ProductImg,
  ContainerInfo,
  LabelDesc,
  LabelPrice,
  BoxPrice,
  BoxSize,
  Btn,
  Container,
} from "./styles";
export function ProductDetail() {
  let history = useHistory();
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
      .replaceAll(" ", "") // separa tam do tamanho da roupa
      .split("a")
      .map((t) => parseInt(t));
    const arr = [];
    for (let i = tamanhos[0]; i < tamanhos[1]; i++) {
      arr.push(parseInt(i));
    }
    selectTamanho(arr);
  }, []);
  function goBack() {
    history.push("/");
  }
  function addProduct() {
    alert("Produto adicionado com sucesso");
  }
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
          <BoxSize>
            <p>Selecionar Tamanho: </p>
            {tamanhos.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </BoxSize>

          <BoxPrice>
            <LabelPrice>R$ {products && products.price}</LabelPrice>

            <div style={{ width: "100%" }}>
              <Btn bg="#008000" mb="12" onClick={addProduct}>
                ADICIONAR À SACOLA
              </Btn>

              <Btn bg="#d50000" onClick={goBack}>
                CANCELAR
              </Btn>
            </div>
          </BoxPrice>
        </ContainerInfo>
      </Container>
    </>
  );
}
