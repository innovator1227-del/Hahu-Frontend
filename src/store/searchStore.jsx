import { create } from "zustand";

const searchStore = create((set) => ({
  searchQuery: "",
  setSearchQuery: (searchQuery) => set({ searchQuery }),
}));

export default searchStore;
