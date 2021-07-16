import FilterItem from "./FilterItem/FilterItem";
import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { Filter, UnorderedList } from "./styles";
function Filters() {
  const filterData = useContext(ProductsContext);
  const { produtos } = filterData;
  return (
    <Filter>
      <UnorderedList>
        {produtos.filters.map((filter) => (
          <FilterItem label={filter.label} key={filter.id} />
        ))}
      </UnorderedList>
    </Filter>
  );
}

export default Filters;
