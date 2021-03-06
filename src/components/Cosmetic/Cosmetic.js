import React from "react";
import { addToDb } from "../../utilities/fakedb";

import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;
  const addToCart = (id) => {
    addToDb(id);
  };

  const removeFromCart = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="product">
      <h2>Buy this: {name}</h2>
      <p>Only for: $ {price}</p>
      <p>
        <small>it has id:{id}</small>
      </p>
      {/* <button onClick={addToCartWithParm}>Add to Cart</button> */}
      <button onClick={() => addToCart(id)}>Purchase</button>
      <button onClick={() => removeFromCart(id)}>Remove</button>
    </div>
  );
};

export default Cosmetic;
