import {
  Container,
  ProductPhoto,
  ProductInfo,
  Photo,
  Title,
  Size,
  Price,
  TitleH3,
  TitleH5,
  Buttons,
  Button,
  PriceTitle,
  PriceButtons,
  PriceTitleText,
  PriceButton,
  Breadcrumbs,
  Details,
} from "./styles";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export function Detail() {
  const { id } = useParams();
  function handleClick(e) {
    e.preventDefault();
    const id = e.target.getAttribute("id");
    switch (id) {
      case "t1":
        setSelectedSize(4);
      case "t2":
        setSelectedSize(6);
      case "t3":
        setSelectedSize(8);
      case "t4":
        setSelectedSize(10);
        break;
    }
  }
  return (
    <>
      <Container data-testid="Details">
        <Breadcrumbs data-testid="breadcrumbs">
          <Link to="/">
            <p>Home </p>
          </Link>
          <p>{selectedProduct.name}</p>
        </Breadcrumbs>

        <Details>
          <ProductPhoto>
            <Photo src={selectedProduct.image} alt={selectedProduct.name} />
          </ProductPhoto>

          <ProductInfo>
            <Title>
              <TitleH3>{selectedProduct.name}</TitleH3>
            </Title>

            <Size>
              <TitleH5>Selecionar Tamanho: {selectedSize}</TitleH5>
              <Buttons>
                <Button id="t1" onClick={handleClick}>
                  4
                </Button>
                <Button id="t2" onClick={handleClick}>
                  6
                </Button>
                <Button id="t3" onClick={handleClick}>
                  8
                </Button>
                <Button id="t4" onClick={handleClick}>
                  10
                </Button>
              </Buttons>
            </Size>

            <Price>
              <PriceTitle>
                <PriceTitleText>R$ {selectedProduct.price}</PriceTitleText>
              </PriceTitle>
              <PriceButtons>
                <PriceButton>ADICIONAR À SACOLA</PriceButton>
                <PriceButton>Cancelar</PriceButton>
              </PriceButtons>
            </Price>
          </ProductInfo>
        </Details>
      </Container>
    </>
  );
}
