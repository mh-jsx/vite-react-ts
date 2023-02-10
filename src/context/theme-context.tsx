import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import { IThemeContextType, Theme } from "interfaces/ITheme";

const themeContext = createContext<IThemeContextType | null>(null);

export const useThemeContext = () => useContext(themeContext);

function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(localStorage.theme || "light");

  const updateThemeValue = (t: Theme) => {
    setTheme(t);
    localStorage.setItem("theme", t);
    if (t === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
      updateThemeValue("dark");
    else updateThemeValue("light");
  }, []);

  const updateTheme = useCallback((t: Theme) => {
    if (t === "dark") updateThemeValue("dark");
    else updateThemeValue("light");
  }, []);

  const values = useMemo(() => ({ theme, updateTheme }), [theme, updateTheme]);

  return <themeContext.Provider value={values}>{children}</themeContext.Provider>;
}

export default ThemeContextProvider;
