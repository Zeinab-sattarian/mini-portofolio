import { createContext, ReactNode, useContext, useState } from "react";
export type ThemeContextType =
  | {
      darkMode: "light" | "dark";
      toggleTheme: VoidFunction;
    }
  | undefined;

export const ThemeContext = createContext<ThemeContextType>(undefined);

export const useTheme = () => {
  const context = useContext<ThemeContextType>(ThemeContext);
  return context;
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setDarkMode(darkMode === "light" ? "dark" : "light");
    if (darkMode === "dark") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
