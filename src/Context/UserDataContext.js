import { createContext, useState, useEffect } from "react";
import axios from "axios";

const UserDataContext = createContext();

export function UserDataProvider({ children }) {
  const [userData, setUserData] = useState();
  const [octocatDataLoaded, octocatDataIsLoading] = useState();

  useEffect(() => {
    const fetchOctocatData = async () => {
        axios
      .get("https://api.github.com/users/octocat")
      .then((res) => {
        setUserData(res.data);
        octocatDataIsLoading(true)
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    fetchOctocatData();
  }, []);

  return (
    <UserDataContext.Provider value={{ userData,octocatDataLoaded }}>
      {children}
    </UserDataContext.Provider>
  );
}

export default UserDataContext;
