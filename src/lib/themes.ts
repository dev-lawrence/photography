// src/lib/themes.ts
export type ThemeColors = {
  name: string;
  light: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
  dark: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
};

export const themes: Record<string, ThemeColors> = {
  blue: {
    name: "Blue",
    light: {
      primary: "221.2 83.2% 53.3%",
      secondary: "210 40% 96.1%",
      accent: "210 40% 96.1%",
      background: "0 0% 100%",
      foreground: "222.2 84% 4.9%",
    },
    dark: {
      primary: "217.2 91.2% 59.8%",
      secondary: "217.2 32.6% 17.5%",
      accent: "217.2 32.6% 17.5%",
      background: "222.2 84% 4.9%",
      foreground: "210 40% 98%",
    },
  },
  green: {
    name: "Green",
    light: {
      primary: "142.1 76.2% 36.3%",
      secondary: "143.8 61.2% 20.2%",
      accent: "143.8 61.2% 20.2%",
      background: "0 0% 100%",
      foreground: "222.2 84% 4.9%",
    },
    dark: {
      primary: "142.1 70.6% 45.3%",
      secondary: "143.8 61.2% 20.2%",
      accent: "143.8 61.2% 20.2%",
      background: "222.2 84% 4.9%",
      foreground: "210 40% 98%",
    },
  },
  purple: {
    name: "Purple",
    light: {
      primary: "262.1 83.3% 57.8%",
      secondary: "263.4 70% 50.4%",
      accent: "263.4 70% 50.4%",
      background: "0 0% 100%",
      foreground: "222.2 84% 4.9%",
    },
    dark: {
      primary: "263.4 70% 50.4%",
      secondary: "263.4 70% 50.4%",
      accent: "263.4 70% 50.4%",
      background: "222.2 84% 4.9%",
      foreground: "210 40% 98%",
    },
  },
};
