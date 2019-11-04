import React from "react";
import Product from "../Components/Product";

const Cart = props => {
  return (
    <div className="container">
      {props.cart.map(c => (
        <Product key={c.id} details={c} {...props} />
      ))}
    </div>
  );
};
export default Cart;
