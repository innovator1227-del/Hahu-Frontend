import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: "darkblue", // default theme

  setTheme: (theme) =>
    set({
      theme,
    }),
}));

export default useThemeStore;
