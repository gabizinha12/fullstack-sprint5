import { ListItem, ItemLink, LinkSpan } from "./styles";

export function CategoriesItem({ label, link }) {
  return (
    <ListItem>
      <ItemLink href={link}>
        <LinkSpan>{label}</LinkSpan>
      </ItemLink>
    </ListItem>
  );
}
