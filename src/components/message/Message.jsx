import React, { useContext } from "react";
import { MessageContext } from "../../contexts/MessageContext";
import { Container, ErrorMessage, SuccessMessage } from "./styles";

export default function Message(props) {
  const getContext = useContext(MessageContext);
  const { hasError } = getContext;
  const successMsg = "Produtos carregados com sucesso";
  const errorMsg = "Erro ao carregar produtos";
  return (
    <Container>
      {hasError && <ErrorMessage>{errorMsg}</ErrorMessage>}

      {!hasError && <SuccessMessage>{successMsg}</SuccessMessage>}
    </Container>
  );
}
