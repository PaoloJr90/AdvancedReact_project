import React, { useContext, useEffect } from "react";
import ProductContext from "./ProductContext";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";

import "./styles/cart.scss";

const Cart = () => {
  const { addCartsList, setAddCartsList } = useContext(ProductContext);

  useEffect(() => {
    const retriveProducts = JSON.parse(localStorage.getItem("add-to-cart"));
    if (retriveProducts) setAddCartsList(retriveProducts);
  }, []);

  useEffect(() => {
    if (addCartsList.length) {
      localStorage.setItem("add-to-cart", JSON.stringify(addCartsList));
    }
  }, [addCartsList]);

  // const deleteCard = (index) => {
  //   const newList = [...addCartsList];
  //   console.log(addCartsList);
  //   newList.splice(index, 1);
  //   console.log(index);
  //   console.log(newList);

  //   setAddCartsList(newList);
  // };

  return (
    <section className="cart">
      <SectionHeader title="Shopping cart" />
      {!addCartsList.length && (
        <div className="empty">
          <div className="container">
            <h2>Looks like your cart is empty...</h2>
            <p>
              To see which products are in cart go to shop and click on "Add to
              cart" button. For now there is no products added into the cart.
            </p>
            <Link className="btn" to={"/shop"}>
              Go to shop
            </Link>
          </div>
        </div>
      )}
      <div className="container">
        <div className="wrapper">
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
      </div>
    </section>
  );
};

export default Cart;
