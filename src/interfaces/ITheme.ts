export type Theme = "light" | "dark";

export interface IThemeContextType {
  theme: Theme;
  updateTheme: (t: Theme) => void;
}
