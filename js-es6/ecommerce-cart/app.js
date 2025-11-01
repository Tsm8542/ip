// Product class
class Product {
  constructor(id, name, price, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

// Cart class
class Cart {
  constructor() {
    this.items = [];
  }

  addProduct(product) {
    const existing = this.items.find(item => item.product.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({ product, quantity: 1 });
    }
    this.renderCart();
  }

  removeProduct(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
    this.renderCart();
  }

  calculateTotal() {
    return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  renderCart() {
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = "";

    this.items.forEach(item => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <img src="${item.product.image}" alt="${item.product.name}">
        <h4>${item.product.name}</h4>
        <p>Price: ₹${item.product.price}</p>
        <p>Quantity: ${item.quantity}</p>
        <button onclick="cart.removeProduct(${item.product.id})">Remove</button>
      `;
      cartList.appendChild(div);
    });

    document.getElementById("totalBill").innerText = this.calculateTotal();
  }
}

// Initialize products
const products = [
  new Product(1, "Laptop", 50000, "https://via.placeholder.com/100"),
  new Product(2, "Smartphone", 15000, "https://via.placeholder.com/100"),
  new Product(3, "Headphones", 2000, "https://via.placeholder.com/100"),
  new Product(4, "Watch", 5000, "https://via.placeholder.com/100")
];

// Display products
const productList = document.getElementById("productList");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>Price: ₹${product.price}</p>
    <button onclick="cart.addProduct(products[${product.id - 1}])">Add to Cart</button>
  `;
  productList.appendChild(div);
});

// Initialize cart
const cart = new Cart();
