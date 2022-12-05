import React, { useContext } from "react";

import { images } from "../../constants";
import "./Header.scss";

import ThemeContext from "../../Context/ThemeContext";

const Header = () => {
  const { toggleTheme, themeSwitch } = useContext(ThemeContext);

  return (
    <>
      <header>
        <h1>devfinder</h1>
        <button onClick={toggleTheme}>{themeSwitch}</button>
        <div className="app__headerStyle-symbol">
          {themeSwitch === "dark" ? (
            <img
              src={images.moonIcon}
              alt="Symbol representing the current selected user theme for the application"
            />
          ) : (
            <img
              src={images.sunIcon}
              alt="Symbol representing the current selected user theme for the application"
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
