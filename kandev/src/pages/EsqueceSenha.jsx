import { useState } from "react";
import "../styles/esquece-senha.css";

export default function EsqueceSenha({ navigate }) {
  const [form, setForm] = useState({
    email: "",
    novaSenha: "",
    confirmarSenha: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.novaSenha !== form.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    // Lógica de redefinição falta implementar ainda
    navigate("login");
  };

  return (
    <div className="page-esquece-senha">
      <div className="container">
        <div className="logo">
          <h1>KanDev</h1>
        </div>

        <div className="titulo-area">
          <h2>Informe seu email e escolha uma nova senha</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grupo">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder={"\u{1F582} Digite seu email"}
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-grupo">
            <label htmlFor="novaSenha">Nova senha</label>
            <input
              type="password"
              id="novaSenha"
              placeholder={"\u{1F512} Digite sua senha"}
              required
              value={form.novaSenha}
              onChange={handleChange}
            />
          </div>

          <div className="form-grupo">
            <label htmlFor="confirmarSenha">Confirmar nova senha</label>
            <input
              type="password"
              id="confirmarSenha"
              placeholder={"\u{1F512} Digite sua senha"}
              required
              value={form.confirmarSenha}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn-redefinir">
            Redefinir senha
          </button>
        </form>

        <div className="voltar-login">
          <button className="link-btn" onClick={() => navigate("login")}>
            ← Voltar para o login
          </button>
        </div>
      </div>
    </div>
  );
}