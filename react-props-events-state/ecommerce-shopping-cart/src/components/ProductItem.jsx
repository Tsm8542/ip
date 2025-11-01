import React from "react";

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "8px",
        width: "180px",
      }}
    >
      <h3>{product.name}</h3>
      <p>💲{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
