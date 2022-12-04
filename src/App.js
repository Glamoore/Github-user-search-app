import React from "react";

// Components
import { Header, SearchBar, ProfileDisplay } from "./components";

// Contexts
import { UserDataProvider } from "./Context/UserDataContext";
import { SearchTermProvider } from "./Context/SearchTermContext";

const App = () => {
  return (
    <div className="app">
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
