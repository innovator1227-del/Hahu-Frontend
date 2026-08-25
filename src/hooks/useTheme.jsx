import { themes } from "@/store/theme";
import useThemeStore from "@/store/themeStore";

const useTheme = () => {
  const theme = useThemeStore((state) => state.theme);

  return themes[theme];
};
export default useTheme;
