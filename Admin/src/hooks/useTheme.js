import useThemeStore from "../stores/ThemeStore";
import { themes } from "../stores/Theme";

const useTheme = () => {
  const theme = useThemeStore((state) => state.theme);

  return themes[theme];
};
export default useTheme;
