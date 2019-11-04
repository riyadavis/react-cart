import React from "react";

const Product = props => {
  const { id, product, category, price } = { ...props.details };
  const [refresh, refreshUpdate] = React.useState(false);
  const incrementHandler = () => {
    let newCart = {
      id: id,
      product: product,
      category: category,
      price: price
    };
    props.increment(newCart);
    refreshUpdate(!refresh);
  };
  const decrementHandler = () => {
    props.decrement(id);
    refreshUpdate(!refresh);
  };
  let Button = (
    <button className="btn btn-primary" onClick={incrementHandler}>
      AddToCart
    </button>
  );
  let index = props.cart.findIndex(i => i.id === id);
  if (index > -1) {
    Button = (
      <div>
        <button className="btn btn-info" onClick={incrementHandler}>
          +
        </button>
        <span style={{ margin: 3 }}>{props.cart[index].qty}</span>
        <button className="btn btn-info" onClick={decrementHandler}>
          -
        </button>
      </div>
    );
  }
  return (
    <div style={styleProduct} className="col-4">
      <p style={{ fontWeight: "bold", fontSize: "20px" }}>{product}</p>
      <p>{category}</p>
      <p>Rs {price}</p>
      {Button}
    </div>
  );
};
const styleProduct = {
  border: "1px solid black",
  margin: "10px 0px",
  padding: 5
};
export default React.memo(Product);
