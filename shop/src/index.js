import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./context/user";
import { ProductsProvider } from "./context/shop";
import { CartProvider } from "./context/cart";

import App from "./App";

import "./index.scss";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
