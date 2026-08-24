import { themes } from "@/store/theme";
import useThemeStore from "@/store/themeStore";

const ThemeBackground = ({ children }) => {
  const theme = useThemeStore((state) => state.theme);

  const currentTheme = themes[theme];

  return (
    <div
      className={`relative ${currentTheme.page.background} ${currentTheme.page.text}`}
    >
      {currentTheme.pattern.enabled && (
        <>
          <div className={currentTheme.pattern.glow} />

          <div className={currentTheme.pattern.gradient} />

          <div className={currentTheme.pattern.dots} />
        </>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ThemeBackground;
