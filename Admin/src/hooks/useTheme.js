import useThemeStore from "../stores/ThemeStore";
import { themes } from "../stores/Theme";

export default function useTheme() {
  const theme = useThemeStore((state) => state.theme);

  return themes[theme];
}
