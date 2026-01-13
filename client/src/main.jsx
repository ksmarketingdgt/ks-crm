import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setMsg("Enviando...");
    const r = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password })
    });
    const data = await r.json().catch(() => ({}));
    setMsg(data.error || "OK");
  }

  return (
    <div className="wrap">
      <div className="card">
        <img className="logo" src="/logo.png" alt="KS Assessoria" />
        <h2 style={{ margin: "0 0 6px" }}>Acesso ao CRM</h2>
        <div className="muted">
          Primeiro acesso será por link de ativação (quando SMTP estiver configurado).
        </div>

        <form onSubmit={onSubmit}>
          <input
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button type="submit">Entrar</button>
        </form>

        <div className="msg">{msg}</div>

        <div className="muted">
          Domínio: <strong>crm.ksassessoriabr.com.br</strong>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
