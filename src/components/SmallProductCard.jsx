import React from "react";
import { Link } from "react-router-dom";

import "./styles/smallProductCard.scss";

const SmallProductCard = ({
  productName,
  productModel,
  productImage,
  productPrice,
}) => {
  return (
    <div className="small-card">
      <div className="small-card-img">
        <img src={productImage} alt={`${productName} ${productModel}`} />
      </div>
      <h3>{productName}</h3>
      <p>{productModel}</p>
      <p className="price">{productPrice}$</p>
      <Link className="btn btn--black" to={"/product-card"}>
        Viev product
      </Link>
    </div>
  );
};

export default SmallProductCard;
