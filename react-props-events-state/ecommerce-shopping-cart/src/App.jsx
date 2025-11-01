import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: "Laptop", price: 899 },
    { id: 2, name: "Headphones", price: 199 },
    { id: 3, name: "Smartphone", price: 699 },
  ];

  // Add product to cart
  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // Increment quantity if already in cart
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      // Add new item with quantity = 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove product (one quantity at a time)
  const handleRemoveFromCart = (productId) => {
    const existingItem = cartItems.find((item) => item.id === productId);

    if (existingItem.quantity > 1) {
      // Decrease quantity
      const updatedCart = cartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      // Remove item completely
      setCartItems(cartItems.filter((item) => item.id !== productId));
    }
  };

  // Clear entire cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 React Shopping Cart</h1>

      <ProductList products={products} onAddToCart={handleAddToCart} />

      <hr />
      <Cart
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />
    </div>
  );
};

export default App;
