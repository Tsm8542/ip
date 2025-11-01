import React from "react";

const Cart = ({ cartItems, onRemoveFromCart, onClearCart }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>🛒 Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart yet.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} — 💲{item.price} × {item.quantity} ={" "}
                <strong>💲{item.price * item.quantity}</strong>
                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() => onRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <h3>Total: 💲{total}</h3>
          <button onClick={onClearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
