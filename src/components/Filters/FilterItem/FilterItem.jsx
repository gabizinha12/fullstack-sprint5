import FilterIcon from "../../../assets/filter.svg";
import React from "react";
import { ListItem, ItemLabel, ItemImage } from "./styles";

export function FilterItem({ label }) {
  return (
    <ListItem>
      <ItemLabel>{label}</ItemLabel>
      <ItemImage src={FilterIcon} alt="ícone de filtro" />
    </ListItem>
  );
}
