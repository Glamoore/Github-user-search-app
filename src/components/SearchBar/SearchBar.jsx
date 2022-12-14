import React, { useContext } from "react";

import { images } from "../../constants";

import SearchTermContext from "../../Context/SearchTermContext";
import UserDataProvider from "../../Context/UserDataContext";

function SearchBar() {
  const { searchTermUpdated } = useContext(SearchTermContext);
  const { NewSearchTerm, userNotFound } = useContext(UserDataProvider);

  return (
    <>
      <section className="app__searchBar-container">
        <div className="app__searchBar-symbol">
          <img src={images.searchIcon} alt="Search here" />
        </div>
        <label for="userInput" className="sr-only">
          GitHub username
        </label>
        <input
          className="app__searchBar"
          type="text"
          placeholder="Search GitHub username"
          name="userInput"
          id="userInput"
          onChange={searchTermUpdated}
        />
        {userNotFound && <span>Hello</span>}
        <button type="button" onClick={NewSearchTerm}>
          Search
        </button>
      </section>
    </>
  );
}

export default SearchBar;
