import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import Product from "./Product/Product";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Filters from "../Filters/Filters";

// hooks
import { useFetch } from "../../hooks/useFetch";
import { LoadingContext } from "../../contexts/LoadingContext";
import { ProductsComponent, OrderedList } from "./styles";

export function Products() {
  const [result, load, error] = useFetch(
    "http://localhost:3000/data/products.json"
  );
  const produtosData = useContext(ProductsContext);
  const contextLoading = useContext(LoadingContext);
  const { loading, setLoading } = contextLoading;

  const { produtos, setProdutos } = produtosData;
  useEffect(() => {
    setLoading({ ...loading, show: load });
    // console.log(produtos);
    setProdutos({
      ...produtos,
      products: result ? result.products : [],
      filters: result ? result.filters : [],
    });
  }, [result, error, load]);
  return (
    <main className="main">
      <Breadcrumbs />
      <Filters />

      <ProductsComponent>
        <OrderedList>
          {produtos.products.map((e) => (
            <Product
              key={e.id}
              description={e.name}
              price={e.price}
              image={`${e.image}`}
              sku={e.sku}
            />
          ))}
        </OrderedList>
      </ProductsComponent>
    </main>
  );
}
