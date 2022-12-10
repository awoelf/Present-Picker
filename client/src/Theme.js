import React, { useEffect, createContext, useState } from "react";
import ListBirthday from "./styles/ListBirthday.css";
import ListChristmas from "./styles/ListChristmas.css";
import ListHalloween from "./styles/ListHalloween.css";

const ThemeContext = createContext();

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    // Default theme is taken as dark-theme
    localStorage.setItem("theme", { ListBirthday });
    return { ListBirthday };
  } else {
    return theme;
  }
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  function toggleTheme() {
    if (theme === { ListBirthday }) {
      setTheme(ListBirthday);
    } else if (theme === { ListChristmas }) {
      setTheme({ ListChristmas });
    } else {
      setTheme({ ListHalloween });
    }
  }

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", theme);
    };

    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
