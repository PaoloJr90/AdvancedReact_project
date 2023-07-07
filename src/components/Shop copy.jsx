import React, { useContext } from "react";
import SectionHeader from "./SectionHeader";
import SmallProductCard from "./SmallProductCard";
import ProductContext from "./ProductContext";

import "./styles/shop.scss";

const Shop = () => {
  const { productsInfo, setProductsInfo } = useContext(ProductContext);

  const productArray = [];

  Object.values(productsInfo).forEach((element, index) => {
    element.forEach((elem) => {
      productArray.push(elem);
    });
  });

  return (
    <>
      <SectionHeader title="shop" />
      <div className="shop">
        <div className="filters"></div>
        <div className="products">
          {productArray.map((product, index) => {
            const { name, model, image, price, id } = product;

            return (
              <SmallProductCard
                key={`product-card-${index}${id}`}
                productId={id}
                productName={name}
                productModel={model}
                productPrice={price}
                productImage={image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;
