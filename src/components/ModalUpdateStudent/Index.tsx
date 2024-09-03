import { useContext, useEffect, useState } from "react";
import ButtonDefault from "../ButtonDefault/Index";
import InputDefault from "../InputDefault/Index";
import DivStyledStudent from "./Styled";
import { Alert, CircularProgress } from "@mui/material";
import { doGet, doPut } from "../../services/api";
import { UserContext } from "../../contexts/UserContext";

interface ModalUpdateStudentProps {
  onSuccess: () => void;
  onClose: () => void;
  id: string;
}

function ModalUpdateStudent({
  onClose,
  onSuccess,
  id,
}: ModalUpdateStudentProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");

  const usercontext = useContext(UserContext);

  async function handleClickUpdateStudent() {
    setLoading(true);
    const response = await doPut(
      `/student`,
      id,
      { name, surname, cpf },
      `${usercontext?.data.token}`
    );
    setName("");
    setSurname("");
    setCpf("");
    if (response.data.success) {
      setLoading(false);
      onSuccess();
      return;
    }
    setLoading(false);
    showAlert();
  }

  function showAlert() {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }

  useEffect(() => {
    async function getInfo() {
      const response = await doGet(
        `/student/${id}`,
        `${usercontext?.data.token}`
      );
      if (response.data.success) {
        setName(response.data.data.name);
        setSurname(response.data.data.surname);
        setCpf(response.data.data.cpf);
      }
    }
    getInfo();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "grid",
        placeItems: "center",
        position: "fixed",
        top: "0",
        backgroundColor: "#b5b5b577",
        backdropFilter: "blur(10px)",
        zIndex: "999",
      }}
    >
      <DivStyledStudent>
        <h2>Atualizar Estudante</h2>
        <div
          style={{
            width: "100%",
            height: "auto",
            boxSizing: "border-box",
            display: "grid",
            placeItems: "center",
            gap: "15px",
          }}
        >
          <InputDefault
            typeInput="text"
            textPlaceHolder="Nome do estudante"
            value={name}
            onchange={(ev) => setName(ev.target.value)}
          />
          <InputDefault
            typeInput="text"
            textPlaceHolder="Sobrenome do estudante"
            value={surname}
            onchange={(ev) => setSurname(ev.target.value)}
          />
          <InputDefault
            typeInput="text"
            textPlaceHolder="CPF do estudante"
            value={cpf}
            onchange={(ev) => setCpf(ev.target.value)}
          />
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          <ButtonDefault onClickFunction={onClose}>Fechar</ButtonDefault>
          {loading ? (
            <CircularProgress />
          ) : (
            <ButtonDefault onClickFunction={handleClickUpdateStudent}>
              Atualizar
            </ButtonDefault>
          )}
        </div>
        {alert ? <Alert severity="error">Ops, algo deu errado...</Alert> : ""}
      </DivStyledStudent>
    </div>
  );
}

export default ModalUpdateStudent;
