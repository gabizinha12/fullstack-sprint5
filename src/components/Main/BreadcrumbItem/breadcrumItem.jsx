import React from "react";
import { ListItem, ItemLink } from "./styles";
function BreadcrumbItem({ value }) {
  return (
    <ListItem>
      <ItemLink>{value}</ItemLink>
    </ListItem>
  );
}

export default BreadcrumbItem;
