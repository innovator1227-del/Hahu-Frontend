import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: "dark", // default theme

  setTheme: (theme) => set({ theme }),
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));

export default useThemeStore;
