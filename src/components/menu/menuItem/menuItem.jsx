import React from "react";
import { ListItem, ItemLink, LinkSpan } from "./styles";

function MenuItem({ label, link }) {
  return (
    <ListItem>
      <ItemLink href={link}>
        <LinkSpan>{label}</LinkSpan>
      </ItemLink>
    </ListItem>
  );
}

export default MenuItem;
