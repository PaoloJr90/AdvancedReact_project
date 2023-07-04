import React, { useContext, useEffect } from "react";
import ProductContext from "./ProductContext";

const Cart = () => {
  const { addCartsList, setAddCartsList } = useContext(ProductContext);

  useEffect(() => {
    const retriveProducts = JSON.parse(localStorage.getItem("add-to-cart"));
    if (retriveProducts) setAddCartsList(retriveProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem("add-to-cart", JSON.stringify(addCartsList));
  }, [addCartsList]);

  // const deleteCard = () => {
  //   console.log("click");
  // };

  return (
    <div>
      {!addCartsList.length && <p>Looks like your cart is empty...</p>}
      {addCartsList.map((card, index) => {
        return (
          <div key={`cart-card-${index}`}>
            <p>Card with id: {card.id}</p>
            <button
              onClick={() => {
                const newList = [...addCartsList];
                console.log(addCartsList);
                newList.splice(index, 1);
                console.log(index);
                console.log(newList);

                setAddCartsList(newList);
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

export default Cart;
