import { ListItem, ItemLink, LinkSpan } from "./styles";

export function CategoriesItem(props) {
  const { category, id } = props;

  return (
    <ListItem>
      <ItemLink href={category.link}>
        <LinkSpan>{category.label}</LinkSpan>
      </ItemLink>
    </ListItem>
  );
}
