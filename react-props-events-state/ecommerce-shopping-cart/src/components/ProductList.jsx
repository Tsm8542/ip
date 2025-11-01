import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div>
      <h2>🛍️ Products</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
