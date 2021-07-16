import { ListItem, ItemLink, LinkSpan } from "./styles";

export function CategoriesItem(props) {
  const { label, link } = props;
  return (
    <ListItem>
      <ItemLink href={link}>
        <LinkSpan>{label}</LinkSpan>
      </ItemLink>
    </ListItem>
  );
}
