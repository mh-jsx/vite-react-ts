import { useThemeContext } from "context/theme-context";

import { IThemeContextType } from "interfaces/ITheme";

function Home() {
  const { theme, updateTheme } = useThemeContext() as IThemeContextType;

  return (
    <div>
      <h1 className="text-3xl font-bold underline bg-black dark:bg-white text-white dark:text-primary-dark">
        Hello World
      </h1>
      <br /> Theme: {theme} <br />
      <button
        className="bg-orange-400 rounded p-2  text-orange-50 font-bold"
        type="button"
        onClick={() => {
          updateTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Toggle theme
      </button>
    </div>
  );
}

export default Home;
