import { useState } from "react";
import { UserContext } from "../../contexts";
import type { User } from "../../types/User";
import LeftBar from "../../components/account-page/LeftBar/LeftBar";

import "./Account.css";
import ClientsPanel from "../../components/account-page/ClientsPanel/ClientsPanel";
import LawyersPanel from "../../components/account-page/LawyersPanel/LawyersPanel";

function Account() {
  // We make a funcion instead of a simple localStorage.get
  // because we will need to read de localStorage value more than one time
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <section className="account">
        <LeftBar />
        <div className="board">
          {user ? (
            <h2>Bienvenido, {user?.username}</h2>
          ) : (
            <h2>Hola de nuevo, Usuario</h2>
          )}
          <ClientsPanel />
          <LawyersPanel />
        </div>
      </section>
    </UserContext.Provider>
  );
}
export default Account;
