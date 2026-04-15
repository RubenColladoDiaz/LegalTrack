import "./Home.css";
import avatar from "../assets/avatar.png";
import { useState } from "react";
import { login } from "../services/authService";

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const data = await login(username, password);
      localStorage.setItem("user", data);
    } catch (error: any) {
      alert("Error: " + error);
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <img className="login-image" src={avatar} alt="login" />

        <input
          className="login-input"
          type="text"
          placeholder="Usuario"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          onClick={handleLogin}
          className="login-button"
          type="button"
          value="Iniciar Sesión"
        />
      </div>
    </div>
  );
}

export default Home;
