import React, { useContext } from "react";
import MainSlider from "./MainSlider";
import SmallProductCard from "./SmallProductCard";
import ProductContext from "./ProductContext";

import { webSiteInfoDB } from "../common/webSiteInfoDB.js";

import "./styles/home.scss";

const Home = () => {
  const { mainSlider } = webSiteInfoDB;

  const { productsInfo } = useContext(ProductContext);
  const { men } = productsInfo;

  return (
    <section className="home">
      <section className="hero">
        <div className="container">
          <MainSlider slides={mainSlider} />
        </div>
      </section>
      <section className="prodacts">
        <div className="container">
          <h2 className="products-title">Our products</h2>
          <div className="wrapper">
            {men.map((product, index) => {
              const { name, model, image, price, id } = product;

              return (
                <SmallProductCard
                  key={`product-card-${index}${id}`}
                  productName={name}
                  productModel={model}
                  productPrice={price}
                  productImage={image}
                />
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
