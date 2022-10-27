import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Switch from "react-switch";
export const ThemeContext = createContext(null);


const Main = () => {
      const [theme, setTheme] = useState("light");
     const toggleTheme = (checked) => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
    //   console.log(checked);
    };
    
    return (
      <div>
        <div id={theme}>
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Header value={{ theme, toggleTheme }}></Header>
            {/* <Switch
              className="switch"
              onChange={toggleTheme}
              checked={theme === "dark"}

              //   checked={theme === "dark"}
            ></Switch> */}
          </ThemeContext.Provider>
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Main;