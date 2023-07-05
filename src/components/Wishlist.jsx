import React, { useContext, useEffect } from "react";
import ProductContext from "./ProductContext";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";

import "./styles/wishlist.scss";

const Wishlist = () => {
  const { addWishlistsList, setWishlistList } = useContext(ProductContext);

  useEffect(() => {
    const retriveProductsWishlist = JSON.parse(
      localStorage.getItem("add-to-wishlist")
    );
    if (retriveProductsWishlist) setWishlistList(retriveProductsWishlist);
  }, []);

  useEffect(() => {
    localStorage.setItem("add-to-wishlist", JSON.stringify(addWishlistsList));
  }, [addWishlistsList]);

  // const deleteCard = () => {
  //   console.log("click");
  // };
  return (
    <div className="wishlist">
      <SectionHeader title="Wishlist" />
      {!addWishlistsList.length && (
        <div className="empty">
          <div className="container">
            <h2>Looks like your wishlist is empty...</h2>
            <p>
              To see which products are in wishlist go to shop and click on "Add
              to wishlist" button. For now there is no products added into the
              wishlist.
            </p>
            <Link className="btn" to={"/shop"}>
              Go to shop
            </Link>
          </div>
        </div>
      )}
      {addWishlistsList.map((card, index) => {
        return (
          <div key={`cart-card-${index}`}>
            <p>Card with id: {card.id}</p>
            <button
              onClick={() => {
                const newList = [...addWishlistsList];
                newList.splice(index, 1);

                setWishlistList(newList);
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Wishlist;
