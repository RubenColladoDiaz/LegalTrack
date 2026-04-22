import { useEffect, useState } from "react";
import type { Lawyer } from "../../../types/Lawyer";
import type { User } from "../../../types/User";

import "./LawyersPanel.css";

function LawyersPanel() {
  const [lawyers, setLawyers] = useState<Lawyer[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedLawyers = localStorage.getItem("lawyers");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    if (storedLawyers) {
      setLawyers(JSON.parse(storedLawyers));
    }
  }, []);

  if (!user || user.role.name !== "ADMIN") return <></>;

  return (
    <div className="lawyers-panel">
      <h2>Abogados asignados</h2>

      {lawyers.length === 0 ? (
        <p>No hay abogados asignados.</p>
      ) : (
        <div className="lawyers-grid">
          {lawyers.map((lawyer) => (
            <div key={lawyer.id} className="lawyer-card">
              <h3>
                {lawyer.firstName} {lawyer.lastName}
              </h3>

              <p>
                <strong>Teléfono:</strong> {lawyer.phone}
              </p>
              <p>
                <strong>Colegiado:</strong> {lawyer.barAssociationNumber}
              </p>
              <p>
                <strong>Especialidad:</strong> {lawyer.specialization}
              </p>
              <p>
                <strong>Clientes:</strong> {lawyer.clients.length}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LawyersPanel;
