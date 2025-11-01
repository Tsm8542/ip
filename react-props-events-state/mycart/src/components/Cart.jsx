import React from "react";

const Cart = ({ cartItems, onRemove }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} × {item.quantity} = ${item.price * item.quantity}
              <button style={{ marginLeft: "10px" }} onClick={() => onRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
