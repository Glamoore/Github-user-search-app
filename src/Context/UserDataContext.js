import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

import SearchTermContext from "../Context/SearchTermContext";

const UserDataContext = createContext();

export function UserDataProvider({ children }) {
  const [userData, setUserData] = useState();
  const [octocatDataLoaded, setOctoDataIsLoading] = useState();
  const [userNotFound, setUserNotFound] = useState();

  const { searchTerm } = useContext(SearchTermContext);

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
          setOctoDataIsLoading(false);
        });
    };
    fetchOctocatData();
  }, []);

  const NewSearchTerm = () => {
    axios
      .get(`https://api.github.com/users/${searchTerm.userInput}`)
      .then((res) => {
        setUserData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setUserNotFound("No results");
        console.log(err);
        console.log(userNotFound);
      });
  };

  return (
    <UserDataContext.Provider value={{ userData, octocatDataLoaded, userNotFound, NewSearchTerm }}>
      {children}
    </UserDataContext.Provider>
  );
}

export default UserDataContext;
