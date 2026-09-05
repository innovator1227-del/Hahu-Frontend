import { create } from "zustand";
import initialProducts from "../data/products";

const PRODUCTS_STORAGE_KEY = "hahu_mock_products";

const getStoredProducts = () => {
  if (typeof window === "undefined") return null;

  try {
    const storedValue = window.localStorage.getItem(PRODUCTS_STORAGE_KEY);

    return storedValue ? JSON.parse(storedValue) : null;
  } catch {
    return null;
  }
};

const productStore = create((set) => ({
  products:
    getStoredProducts() ||
    initialProducts.map((product) => ({
      ...product,
      status: "APPROVED",
    })),

  // Seller adds product
  addProduct: (newProduct) =>
    set((state) => {
      const updatedProducts = [
        ...state.products,
        {
          ...newProduct,
          id: Date.now(),
          status: "PENDING",
        },
      ];

      localStorage.setItem(
        PRODUCTS_STORAGE_KEY,
        JSON.stringify(updatedProducts)
      );

      return {
        products: updatedProducts,
      };
    }),

  // Admin approves product
  approveProduct: (id) =>
    set((state) => {
      const updatedProducts = state.products.map((product) =>
        product.id === id
          ? { ...product, status: "APPROVED" }
          : product
      );

      localStorage.setItem(
        PRODUCTS_STORAGE_KEY,
        JSON.stringify(updatedProducts)
      );

      return {
        products: updatedProducts,
      };
    }),

  // Admin rejects product
  rejectProduct: (id) =>
    set((state) => {
      const updatedProducts = state.products.map((product) =>
        product.id === id
          ? { ...product, status: "REJECTED" }
          : product
      );

      localStorage.setItem(
        PRODUCTS_STORAGE_KEY,
        JSON.stringify(updatedProducts)
      );

      return {
        products: updatedProducts,
      };
    }),
}));

export default productStore;