import { createContext, useState } from "react";

const SearchTermContext = createContext();

let initialValue = {
  searchTerm: "",
};

export function SearchTermProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const searchTermUpdated = (e) => {
    setSearchTerm({ ...searchTerm, [e.target.name]: e.target.value });
  };

  return (
    <SearchTermContext.Provider value={{ searchTerm, searchTermUpdated }}>
      {children}
    </SearchTermContext.Provider>
  );
}

export default SearchTermContext;
