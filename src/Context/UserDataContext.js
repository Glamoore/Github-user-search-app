import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

import SearchTermContext from "../Context/SearchTermContext";

const UserDataContext = createContext();

export function UserDataProvider({ children }) {
  const [userData, setUserData] = useState();
  const [octocatDataLoaded, setOctoDataIsLoading] = useState();

  const { searchTerm, searchTermUpdated } = useContext(SearchTermContext);

  useEffect(() => {
    const fetchOctocatData = async () => {
      axios
        .get("https://api.github.com/users/octocat")
        .then((res) => {
          setUserData(res.data);
          setOctoDataIsLoading(true);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchOctocatData();
  }, []);

  return (
    <UserDataContext.Provider value={{ userData, octocatDataLoaded }}>
      {children}
    </UserDataContext.Provider>
  );
}

export default UserDataContext;
