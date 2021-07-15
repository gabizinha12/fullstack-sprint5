import { Title, Image } from "./styles";
import NotFoundImg from "../../assets/not_found.svg";
export function NotFound() {
  return (
    <>
      <Image src={NotFoundImg} alt="Error image" />
      <Title>
        Ops! Parece que a página que você está procurando não existe
      </Title>
    </>
  );
}
