import React, { useContext, useEffect } from "react";

// Components
import { Header, SearchBar, ProfileDisplay } from "./components";

// Contexts
import { UserDataProvider } from "./Context/UserDataContext";
import { SearchTermProvider } from "./Context/SearchTermContext";

import ThemeContext from "./Context/ThemeContext";

import "./App.scss";

const App = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  return (
    <div className={`App ${theme}`}>
      <SearchTermProvider>
        <UserDataProvider>
            <Header />
            <SearchBar />
            <ProfileDisplay />
        </UserDataProvider>
      </SearchTermProvider>
    </div>
  );
};

export default App;
