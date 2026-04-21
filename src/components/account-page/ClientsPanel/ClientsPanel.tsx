import { useState } from "react";
import type { Client } from "../../../types/Client";

function ClientsPanel() {
  const [clients, setClients] = useState<Client[] | null>(() => {
    const storedClients = localStorage.getItem("clients");
    return storedClients ? JSON.parse(storedClients) : null;
  });
}
export default ClientsPanel;
