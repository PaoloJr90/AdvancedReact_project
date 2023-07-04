import React, { useContext, useEffect } from "react";
import ProductContext from "./ProductContext";

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
    <div>
      {!addWishlistsList.length && <p>Looks like your wishlist is empty...</p>}
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
