import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { useState } from "react";
import { doPostCreate } from "../../services/api";
import Alert from "@mui/material/Alert/Alert";

interface ModalCreateUserProps {
  onClose: () => void;
}

function ModalCreateUser({ onClose }: ModalCreateUserProps) {
  const [loading, setLoadig] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const [contentAlert, setContentAlert] = useState<string>("");
  const [severityAlert, setSeverityAlert] = useState<
    "success" | "info" | "warning" | "error"
  >("success");
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setLoadig(true);
    const response = await doPostCreate("/user", { email, password: pass });
    console.log(response);
    if (response.success) {
      setSeverityAlert("success");
      setContentAlert("Usúario criado com sucesso!");
      setLoadig(false);
      showAlert();
    } else {
      setSeverityAlert("error");
      setContentAlert("Email ou senha já existem!");
      setLoadig(false);
      showAlert();
    }
  }

  function showAlert() {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }

  return (
    <div className="overlap">
      <form className="form-register" onSubmit={handleSubmit}>
        <h1>Registro de usúario</h1>
        <input
          type="text"
          className="input-default"
          placeholder="Insira um e-mail válido"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          className="input-default"
          placeholder="Crie um password"
          value={pass}
          onChange={(ev) => setPass(ev.target.value)}
        />
        {loading ? (
          <CircularProgress />
        ) : (
          <div style={{ display: "flex", gap: "10px" }}>
            <button type="submit" className="btn-login">
              Criar Conta
            </button>
            <button className="btn-register" onClick={onClose}>
              Voltar
            </button>
          </div>
        )}
        {alert ? <Alert severity={severityAlert}>{contentAlert}</Alert> : ""}
      </form>
    </div>
  );
}

export default ModalCreateUser;
