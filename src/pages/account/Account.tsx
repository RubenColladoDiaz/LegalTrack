import { useState } from "react";
import { UserContext } from "../../contexts";

function Account() {
  // We make a funcion instead of a simple localStorage.get
  // because we will need to read de localStorage value more than one time
  const [user, setUser] = useState<string | null>(() => {
    return localStorage.getItem("user");
  });
  return (
    <UserContext.Provider value={{ user, setUser }}></UserContext.Provider>
  );
}
export default Account;
