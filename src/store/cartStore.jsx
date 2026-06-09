import { createContext, useContext, useState } from "react"

const CartContext = createContext()


export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [message, setMessage] = useState(null);

const addToCart = (product) => {
  setCartItems(prev => {
    const existingItem = prev.find(item => item.id === product.id);

    if (existingItem) {
      return prev.map(item =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    }

    return [...prev, { ...product, quantity: 1 }];
  });

  setMessage(`${product.title} added to cart`);

  setTimeout(() => setMessage(null), 2000);
};

 const removeFromCart = (id) => {
  setCartItems(prev =>
    prev
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  );
};

const increaseQty = (id) => {
  setCartItems(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    )
  );
};

const decreaseQty = (id) => {
  setCartItems(prev =>
    prev
      .map(item =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  );
};

  return (
    <CartContext.Provider value={{
  cartItems,
  addToCart,
  removeFromCart,
  message,
  increaseQty,
  decreaseQty,
  setCartItems
  }}
>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)