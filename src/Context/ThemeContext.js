import { createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [themeSwitch, setThemeSwitch] = useState("dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setThemeSwitch("light");
    } else {
      setTheme("light");
      setThemeSwitch("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
