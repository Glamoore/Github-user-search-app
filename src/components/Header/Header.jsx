import React from "react";

import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header>
        <h1>devfinder</h1>
        <p>DARK</p>
        <div className="app__headerStyle-symbol">
          <img
            src={images.moonIcon}
            alt="Symbol representing the current selected user theme for the application"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
