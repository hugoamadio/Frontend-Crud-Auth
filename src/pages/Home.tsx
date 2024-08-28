import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Header from "../components/Header/Index";
import { doGet } from "../services/api";
import StudentType from "../types/StudentType";
import Render from "../components/Render";
import ModalCreateStudent from "../components/ModalCreateStudent/Index";

function Home() {
  const [modalCreateStudent, setModalCreateStudent] = useState<boolean>(false);
  const [studentsList, setStudentsList] = useState<StudentType[]>([]);
  const [reRender, setReRender] = useState<boolean>(false);

  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  useEffect(() => {
    if (userContext?.data.email === "") {
      navigate("/");
    }
  }, [userContext]);

  useEffect(() => {
    getStudents();
  }, [reRender]);

  function onSuccess(){
    setModalCreateStudent(!modalCreateStudent)
    setReRender(!reRender)
  }

  async function getStudents() {
    const response = await doGet("/student", `${userContext?.data.token}`);
    console.log(response)
    if (response?.auth) {
      setStudentsList(response.data.data);
    }
  }

  return (
    <>
      <Header newStudent={() => setModalCreateStudent(true)}/>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "auto",
          padding: "50px 200px",
          boxSizing: "border-box",
          flexWrap: "wrap",
          gap: "35px",
        }}
      >
        <Render
          reRender={() => setReRender(!reRender)}
          studentList={studentsList}
        />
      </div>
      {modalCreateStudent && (
        <ModalCreateStudent
          onSuccess={onSuccess}
        />
      )}
    </>
  );
}

export default Home;
