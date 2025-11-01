import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onAdd }) => (
  <div>
    <h2>Products</h2>
    <div style={{ display: "flex", gap: "10px" }}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  </div>
);

export default ProductList;
