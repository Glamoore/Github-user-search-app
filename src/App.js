import React from "react";

// Components
import { Header, SearchBar, ProfileDisplay } from "./components";

// Contexts
import { UserDataProvider } from "./Context/UserDataContext";

const App = () => {
  return (
    <div className="app">
      <UserDataProvider>
        <Header />
        <SearchBar />
        <ProfileDisplay />
      </UserDataProvider>
    </div>
  );
};

export default App;
