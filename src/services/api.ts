import axios from "axios";
import StudentType from "../types/StudentType";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

async function doPostCreateStudent(data: StudentType, token: string) {
  try {
    const response = await apiClient.post("/student", data, {
      headers: { Authorization: token },
    });
    if (response.status === 201) {
      return { ...response.data, success: true };
    }
    return { success: false, msg: response.data.msg };
  } catch (error) {
    return { success: false, msg: "Erro doPostCreateStudent" };
  }
}

async function doPostCreate(
  url: string,
  data: { email: string; password: string }
) {
  try {
    const response = await apiClient.post(url, data);
    if (response.status === 201) {
      return { ...response, success: true };
    }
    return { success: false, msg: response.data.msg };
  } catch (error) {
    return { success: false, msg: "erro doPostCreate" };
  }
}

async function doPost(url: string, data: any, token: string) {
  let auth = false;
  try {
    const response = await apiClient.post(url, data, {
      headers: { Authorization: token },
    });
    if (response.status === 200) {
      auth = true;
      return { ...response.data, auth };
    }
    return { success: false, msg: "Erro doPost", auth };
  } catch (error) {
    return { success: false, msg: "Erro doPost", auth };
  }
}

async function doGet(url: string, token: string) {
  let auth = false;
  try {
    const response = await apiClient.get(url, {
      headers: { Authorization: token },
    });
    if (response.status === 200) {
      auth = true;
      return { data: response.data.data, auth };
    }
    return { success: false, msg: "User not logged" };
  } catch (error) {
    return { success: false, msg: "Erro doGet", auth };
  }
}

async function doDelete(url: string, id: string, token: string) {
  let auth = false;
  try {
    const response = await apiClient.delete(`${url}/${id}`, {
      headers: { Authorization: token },
    });
    if (response.status === 200) {
      auth = true;
      return { data: response.data.data, auth };
    }
    return { success: false, msg: "User not logged" };
  } catch (error) {
    return { success: false, msg: "Erro doDelete" };
  }
}

export { doPost, doPostCreate, doGet, doDelete, doPostCreateStudent };
