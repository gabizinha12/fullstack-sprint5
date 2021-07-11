import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { MessageProvider } from "./contexts/MessageContext";
import { CatgoriasContext } from "./contexts/CategoriasContext";
import { ProdutosContext } from "./contexts/ProductsContext";
import { LoadContext } from "./contexts/LoadingContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import Message from "./components/message/Message";
import Products from "./components/products/products";
import Loading from "./components/loading/loading";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ProdutosContext>
        <LoadContext>
          <Loading />
          <CatgoriasContext>
            <MessageProvider>
              <Message />
              <Header></Header>
              <Products></Products>
              <Footer></Footer>
            </MessageProvider>
          </CatgoriasContext>
        </LoadContext>
      </ProdutosContext>
    </div>
  );
}

export default App;
