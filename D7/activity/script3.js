const cart = {
  total: 0,
  items: [],
};

const products = {
  product1: {
    id: 1,
    name: 'Product 1',
    quantity: 1,
    price: 10,
  },
  product2: {
    id: 2,
    name: 'Product 2',
    quantity: 1,
    price: 15,
  },
  product3: {
    id: 3,
    name: 'Product 3',
    quantity: 1,
    price: 20,
  },
};

let totalText = document.getElementsByClassName('total')[0];
let cartList = document.querySelector('ul.cart-item-list');

function calculateCart() {
  // everytime its run it counts the items and their quantities
  let cartTotal = 0;
  for (i = 0; i < cart.items.length; i++) {
    let itemSubTotal = cart.items[i].price * cart.items[i].quantity;
    cartTotal += itemSubTotal;
  }
  totalText.textContent = `Total: $${cartTotal}`;
}

function updateCartQuantity(productId) {
  // locate the cart item object according to product id
  let cartItemIndex = cart.items.findIndex(
    (cartItem) => cartItem.id === productId
  );
  cart.items[cartItemIndex].quantity++;
  const cartItemQuantity = cart.items[cartItemIndex].quantity;
  // Find the displayed quantity to be updated
  const cartListElement = cartList.querySelector(
    `li[product-id='${productId}']`
  );
  const quantity = cartListElement.getElementsByClassName('quantity')[0];
  quantity.innerHTML = `Quantity: ${cartItemQuantity}`;
  calculateCart();
}

function getProductById(id) {
  for (const key in products) {
    if (products[key].id === id) {
      return products[key];
    }
  }
  return null;
}

function constructCartItemRow(productId) {
  const product = getProductById(productId);
  const cartListItem = document.createElement('li');
  cartListItem.setAttribute('product-id', `${productId}`);
  cartListItem.innerHTML = `
    <p>${product.name} Price: $${product.price}</p>
    <button class="" onclick="removeFromCart(${productId})">Remove</button>
    <p class="quantity">Quantity: 1</p>`;
  cartList.appendChild(cartListItem);
}

function addToCart(productId) {
  let cartItems = cart.items;
  const product = getProductById(productId);

  //Check if the cart array already contains the specific product object
  let inCartItems = cartItems.includes(product, 0);
  // If true update the cart's specific product object's quantity
  if (inCartItems) {
    for (let cartItem of cartItems) {
      if (cartItem.name === product.name) {
        updateCartQuantity(productId);
      }
    }
  } else {
    // Everytime a new item is pushed, append a new row
    cart.items.push(product);
    constructCartItemRow(productId);
  }
  calculateCart();
}

function removeFromCart(productId) {
  let cartItemIndex = cart.items.findIndex(
    (cartItem) => cartItem.id === productId
  );
  cart.items.splice(cartItemIndex, 1);
  const cartListElement = cartList.querySelector(
    `li[product-id='${productId}']`
  );
  cartListElement.remove();
  calculateCart();
}
