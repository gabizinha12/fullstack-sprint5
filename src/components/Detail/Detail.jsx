import {
  Container,
  ProductPhoto,
  ProductInfo,
  Photo,
  Title,
  Size,
  Price,
} from "./styles";
export function Detail(props) {
  const { product } = props;
  <>
    <Container>
      <ProductPhoto></ProductPhoto>
      <ProductInfo>
        <Title>
          <h3>Título</h3>
        </Title>
        <Size>Tamanho</Size>
        <Price>PREÇO</Price>
      </ProductInfo>
    </Container>
  </>;
}
