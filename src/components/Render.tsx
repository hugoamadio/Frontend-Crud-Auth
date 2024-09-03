import { useContext } from "react";
import { doDelete } from "../services/api";
import StudentType from "../types/StudentType";
import CardMU from "./CardMU";
import { UserContext } from "../contexts/UserContext";

interface RenderProps {
  studentList: StudentType[];
  reRender: () => void;
  showUpdateModal: (id: string) => void;
}

function Render({ studentList, reRender, showUpdateModal }: RenderProps) {
  const userContext = useContext(UserContext);

  async function deleteFunction(id: string) {
    const verify = confirm("Tem certeza que deseja excluir o aluno?");
    if (!verify) {
      return;
    }
    const response = await doDelete(
      "/student",
      id,
      `${userContext?.data.token}`
    );
    if (response.auth) {
      reRender();
    }
  }

  async function updateFunction(id: string){
    showUpdateModal(id)
  }

  return (
    <>
      {studentList.map((item: StudentType) => (
        <CardMU
          key={item.id}
          id={item.id}
          name={item.name}
          surname={item.surname}
          cpf={item.cpf}
          onDeleteFunction={() => deleteFunction(item.id)}
          onUpdateFunction={() => updateFunction(item.id)}
        />
      ))}
    </>
  );
}

export default Render;
