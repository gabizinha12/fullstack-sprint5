import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
export function ProductDetail() {
  const { id } = useParams();
  const [result, load, error] = useFetch(
    "http://localhost:3000/data/products.json"
  );
  const produtosData = useContext(ProductsContext);
  const { produtos, setProdutos } = produtosData;
  useEffect(() => {
    console.log(produtos);
    setProdutos({
      ...produtos,
      products: result ? result.products : [],
      filters: result ? result.filters : [],
    });
  }, [result, error, load]);
}
