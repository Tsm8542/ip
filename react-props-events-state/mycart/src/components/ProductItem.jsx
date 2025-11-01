import React from "react";

const ProductItem = ({ product, onAdd }) => (
  <div style={{ border: "1px solid #ccc", padding: "10px", width: "120px" }}>
    <h3>{product.name}</h3>
    <p>Price: ${product.price}</p>
    <button onClick={() => onAdd(product)}>Add to Cart</button>
  </div>
);

export default ProductItem;
