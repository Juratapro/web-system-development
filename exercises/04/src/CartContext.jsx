import { useState, createContext } from 'react';

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (id) => {
    console.log('quito del carrito el producto', id);
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    console.log('producto', id, 'ahora tiene cantidad', quantity);
    if (quantity === 0) {
      removeFromCart(id);
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: quantity } : item)));
    }
  };

  const addToCart = (product) => {
    console.log('añado al carrito:', product.name);
    const item = cartItems.find((item) => item.id === product.id);

    if (item) {
      updateQuantity(product.id, item.quantity + 1);
    } else {
      setCartItems(cartItems.concat({ ...product, quantity: 1 }));
    }
  };

  const clearCart = () => {
    console.log('carrito vacio');
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
