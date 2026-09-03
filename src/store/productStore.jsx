import { create } from "zustand";
import initialProducts from "../data/products";

const productStore = create((set) => ({
  // Initialize seed products only once
  products: initialProducts.map((product) => ({
    ...product,
    status: "APPROVED",
  })),

  // Seller adds product
  addProduct: (newProduct) =>
    set((state) => ({
      products: [
        ...state.products,
        {
          ...newProduct,
          id: Date.now(),
          status: "PENDING",
        },
      ],
    })),

  // Admin approves product
  approveProduct: (id) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, status: "APPROVED" } : product,
      ),
    })),

  // Admin rejects product
  rejectProduct: (id) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, status: "REJECTED" } : product,
      ),
    })),
}));

export default productStore;
