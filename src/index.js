import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import ProductContext from "./components/ProductContext";
import { useImmer } from "use-immer";

import { products } from "./common/productsDB";

const Main = () => {
  const [productsInfo, setProductsInfo] = useImmer(products);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <ProductContext.Provider value={{ productsInfo, setProductsInfo }}>
          <App />
        </ProductContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
