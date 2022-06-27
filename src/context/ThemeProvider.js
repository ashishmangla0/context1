import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const { children } = props;

  const [themeDark, setThemeDark] = useState(false);

  const handleThemeDark = () => {
    setThemeDark(!themeDark);
  };

  const ThemeProviderValues = {
    themeDark,
    handleThemeDark,
  };
  useEffect(() => {
    localStorage.setItem("darkTheme", themeDark);
  }, [themeDark]);

  useEffect(() => {
    const getThemeValue = JSON.parse(localStorage.getItem("darkTheme")) ;
    //console.log(typeof(getThemeValue));
    const themeBody = document.querySelector("body");
    if (getThemeValue) {
      themeBody.classList.add("dark-theme");
    } else {
      themeBody.classList.remove("dark-theme");
    }
    return () => {
      themeBody.classList.remove("dark-theme");
    };
  }, [themeDark]);

  return (
    <ThemeContext.Provider value={ThemeProviderValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
