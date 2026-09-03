import { create } from "zustand";

const cartStore = create((set) => ({
  cartItems: [],
  message: null,
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id,
      );
      let newCartItems;

      if (existingItem) {
        newCartItems = state.cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item,
        );
      } else {
        newCartItems = [...state.cartItems, { ...product, quantity: 1 }];
      }

      return { cartItems: newCartItems };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    })),
  increaseQty: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item,
      ),
    })),
  decreaseQty: (id) =>
    set((state) => ({
      cartItems: state.cartItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    })),
  clearCart: () => set({ cartItems: [] }),
}));

export default cartStore;
