import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { ProductsDetail } from "./pages/ProductDetail/ProductDetail";
import { Search } from "./components/Search/Search";
import { MessageProvider } from "./contexts/MessageContext";
import { CatgoriasContext } from "./contexts/CategoriasContext";
import { ProdutosContext } from "./contexts/ProductsContext";
import { LoadContext } from "./contexts/LoadingContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Header } from "./components/Header/Header";
import { Routes } from "./Routes/Routes";
import Message from "./components/Message/Message";
import Loading from "./components/Loading/Loading";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
              <Header />
              <Routes />
              <Footer />
            </MessageProvider>
          </CatgoriasContext>
        </LoadContext>
      </ProdutosContext>
    </div>
  );
}

export default App;
