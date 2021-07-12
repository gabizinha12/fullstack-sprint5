import FilterIcon from "../../assets/filter.svg";
import React from "react";
import { ListItem, ItemLabel, ItemImage } from "./styles";

function FilterItem({ label }) {
  return (
    <ListItem>
      <ItemLabel label={label} />
      <ItemImage src={FilterIcon} alt="ícone de filtro" />
    </ListItem>
  );
}

export default FilterItem;
