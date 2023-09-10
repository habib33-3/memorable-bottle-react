const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");

  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const saveToLS = (cart) => {
  const cartStringify = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringify);
};

const addToLS = (id) => {
  const cart = getStoredCart();
  cart.push(id);

  saveToLS(cart);
};

export { addToLS,getStoredCart };
