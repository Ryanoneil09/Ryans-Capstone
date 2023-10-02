import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  console.log("productlist", products);
  return (
    <div>
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
