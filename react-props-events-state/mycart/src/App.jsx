import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Book", price: 15 },
    { id: 2, name: "Pen", price: 5 },
    { id: 3, name: "Notebook", price: 10 },
  ];

  // Add to cart
  const handleAdd = (product) => {
    const item = cart.find((i) => i.id === product.id);
    if (item) {
      setCart(
        cart.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove from cart
  const handleRemove = (id) => {
    const item = cart.find((i) => i.id === id);
    if (item.quantity > 1) {
      setCart(cart.map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i)));
    } else {
      setCart(cart.filter((i) => i.id !== id));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>MyCart 🛒</h1>
      <ProductList products={products} onAdd={handleAdd} />
      <Cart cartItems={cart} onRemove={handleRemove} />
    </div>
  );
};

export default App;
