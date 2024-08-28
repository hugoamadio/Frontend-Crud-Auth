import { useContext, useEffect, useState } from "react";
import { doPost } from "../services/api";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert/Alert";
import { UserContext } from "../contexts/UserContext";
import ModalCreateUser from "../components/ModalCreateUser/Index";

function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  function showAlert() {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setLoading(true);
    const response = await doPost(
      "/auth",
      { email: email, password: pass },
      ""
    );
    if (response.success) {
      userContext?.setData({ email, token: response.token });
      navigate("/home");
    }
    setLoading(false);
    showAlert();
  }

  useEffect(() => {
    if (userContext?.data.email) {
      navigate("/home");
    }
  }, [userContext]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <form onSubmit={handleSubmit} className="form-login">
        <h1>Faça o Login abaixo</h1>
        <input
          type="text"
          className="input-default"
          placeholder="E-mail"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          className="input-default"
          placeholder="Password"
          value={pass}
          onChange={(ev) => setPass(ev.target.value)}
        />
        {loading ? (
          <CircularProgress />
        ) : (
          <div style={{ display: "flex", gap: "10px" }}>
            <button type="submit" className="btn-login">
              Logar
            </button>
            <button
              className="btn-register"
              onClick={() => setModalCreate(true)}
            >
              Criar Conta
            </button>
          </div>
        )}
        {alert ? <Alert severity="error">Login ou senha inválidos!</Alert> : ""}
      </form>
      {modalCreate && <ModalCreateUser onClose={() => setModalCreate(false)} />}
    </div>
  );
}

export default Login;
