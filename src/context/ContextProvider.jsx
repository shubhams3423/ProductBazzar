import { useState, useContext, createContext } from "react";
import React from "react";
const MyContext = createContext("");
const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    // if (theme === "light") {
    //   setTheme("dark");
    // } else {
    //   setTheme("light");
    // }
  };
  return (
    <MyContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </MyContext.Provider>
  );
};

const useProductContext = () => useContext(MyContext);

export { ContextProvider, useProductContext };
