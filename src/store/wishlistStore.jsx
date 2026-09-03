import { create } from "zustand";

const whishlistStore = create((set) => ({
  wishlist: [],
  addToWishlist: (product) =>
    set((state) => {
      const exists = state.wishlist.some((item) => item.id === product.id);
      if (exists) return state;
      return { wishlist: [...state.wishlist, product] };
    }),
  removeFromWishlist: (id) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== id),
    })),
}));

export default whishlistStore;
