import React from "react";
import Product from "../Components/Product";
import { ProductsInfo } from "../Constants/Data";

const Products = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {ProductsInfo.map(p => (
          <Product key={p.id} details={p} {...products} />
        ))}
      </div>
    </div>
  );
};
export default React.memo(Products);
