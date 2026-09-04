import { create } from "zustand";

const categoryStore = create((set) => ({
  selectedCategory: "All",
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));

export default categoryStore;
