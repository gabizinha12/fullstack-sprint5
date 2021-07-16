import { Title, Image } from "./styles";
import NotFoundImg from "../../assets/not_found.svg";
import { Link } from "react-router-dom";
export function NotFound() {
  return (
    <>
      <Image src={NotFoundImg} alt="Error image" />
      <Title>
        Ops! Parece que a página que você está procurando não existe
        <br />
        <Link to="/" className="link">
          Volte para a página inicial
        </Link>
      </Title>
    </>
  );
}
