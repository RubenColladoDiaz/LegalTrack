import { useContext, useMemo } from "react";
import { UserContext } from "../../../contexts";
import "./LeftBar.css";

function getInitials(name?: string) {
  if (!name) return "?";
  return name
    ?.split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function LeftBar() {
  const { user } = useContext(UserContext);

  const displayName = user?.username ?? "Usuario";
  const displayEmail = user?.email ?? "usuario@gmail.com";
  const role = user?.role?.name ?? "Sin rol asignado";
  const initials = getInitials(user?.username);

  return (
    <aside className="leftbar">
      <div className="leftbar__top">
        <div className="leftbar__avatar">
          {user?.avatar ? (
            <img src={user.avatar} alt="avatar" />
          ) : (
            <span>{initials}</span>
          )}
        </div>

        <h3 className="leftbar__name">{displayName}</h3>
        <p className="leftbar__email">{displayEmail}</p>
      </div>

      <div className="leftbar__menu">
        <button className="leftbar__btn">Editar Perfil</button>
        <button className="leftbar__btn">Configuración</button>
        <button className="leftbar__btn">Seguridad</button>
        <button className="leftbar__btn">Notificaciones</button>
      </div>

      <div className="leftbar__bottom">
        <p className="leftbar__role">{role}</p>
      </div>
    </aside>
  );
}

export default LeftBar;
