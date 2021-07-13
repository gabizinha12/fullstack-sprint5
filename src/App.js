import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { MessageProvider } from "./contexts/MessageContext";
import { CatgoriasContext } from "./contexts/CategoriasContext";
import { ProdutosContext } from "./contexts/ProductsContext";
import { LoadContext } from "./contexts/LoadingContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import Message from "./components/Message/Message";
import Products from "./components/Main/Products/Products";
import Loading from "./components/Loading/Loading";
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
