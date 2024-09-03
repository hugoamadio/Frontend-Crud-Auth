import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

async function doPost(url: string, data: any, token?: string) {
  let auth = false;
  try {
    const response = await apiClient.post(url, data, {
      headers: { Authorization: token },
    });

    if (response.status === 200 || 201) {
      auth = true;
      return { data: response.data, auth };
    }
    return { success: false, msg: "User not logged" };
  } catch (error) {}
  return { success: false, msg: "Erro do post", auth };
}

async function doGet(url: string, token: string) {
  let auth = false;
  try {
    const response = await apiClient.get(url, {
      headers: { Authorization: token },
    });
    if (response.status === 200) {
      auth = true;
      return { data: response.data, auth };
    }
    return { success: false, msg: "User not logged" };
  } catch (error) {
    return { success: false, msg: "Erro doGet", error };
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
      return { data: response.data, auth };
    }
    return { success: false, msg: "User not logged" };
  } catch (error) {
    return { success: false, msg: "Erro doDelete" };
  }
}

async function doPut(url: string, id: string, data: any, token: string) {
  let auth = false;
  try {
    const response = await apiClient.put(`${url}/${id}`, data, {
      headers: { Authorization: token },
    });
    if (response.status === 200) {
      auth = true;
      return { data: response.data, auth };
    }
    return { success: false, msg: "User not logged" };
  } catch (error) {
    return { success: false, msg: "erro doPut" };
  }
}

export { doPost, doGet, doDelete, doPut };
