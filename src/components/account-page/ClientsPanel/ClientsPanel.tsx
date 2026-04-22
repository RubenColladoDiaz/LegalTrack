import { useState } from "react";
import type { Client } from "../../../types/Client";
import "./ClientsPanel.css";

function ClientsPanel() {
  const [clients, setClients] = useState<Client[]>(() => {
    return JSON.parse(localStorage.getItem("clients") || "[]");
  });

  return (
    <div className="clients-container">
      <header className="clients-header">
        <h1>Mis clientes</h1>
      </header>

      <div className="clients-grid">
        {clients.length === 0 ? (
          <div className="empty-state">No tienes clientes todavía</div>
        ) : (
          clients.map((client) => (
            <div key={client.id} className="client-card">
              <div className="client-avatar">
                {client.firstName.charAt(0)}
                {client.lastName.charAt(0)}
              </div>

              <div className="client-info">
                <h3>
                  {client.firstName} {client.lastName}
                </h3>
                <p>{client.email}</p>
                <span>{client.phone}</span>
                <small>{client.dni}</small>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ClientsPanel;
