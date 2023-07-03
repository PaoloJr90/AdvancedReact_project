import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "./ProductContext";

import "./styles/productCard.scss";
import SectionHeader from "./SectionHeader";

const ProductCard = () => {
  const { id } = useParams();
  const { productsInfo } = useContext(ProductContext);
  let productWithId = null;

  const photosCount = [1, 2, 3, 4, 5, 6];

  for (const category in productsInfo) {
    const productsWithCategory = productsInfo[category];

    productWithId = productsWithCategory.find((item) => item.id === id);

    if (productWithId) {
      break;
    }
  }

  return (
    <>
      <SectionHeader title="Shop" />
      <div className="container">
        <div className="card">
          <div className="images">
            {photosCount.map((photo, index) => {
              return (
                <div key={`photo-product-${index}`} className="images-block">
                  <img
                    src={`/${productWithId.image}`}
                    alt={`${productWithId.name} ${productWithId.model}`}
                  />
                </div>
              );
            })}
          </div>
          <div className="description">
            <h2>{`${productWithId.name} ${productWithId.model}`}</h2>
            <p className="price">${productWithId.price}</p>
            <div className="sizes">
              {productWithId.sizes.map((size, index) => {
                return (
                  <div
                    className={size.inStock ? "size" : "size unavailable"}
                    key={`size-${index}`}
                  >
                    {size.sizeShoe}
                  </div>
                );
              })}
            </div>
            <p>{productWithId.about}</p>
            <div className="buttons">
              <button className="btn">Add to card</button>
              <button className="btn">Add to wishlist</button>
            </div>
            {/* TODO: Dropdown description and reviews */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
