import axios from "axios";

const API_URL = "http://localhost:8080/api";

export async function login(
  username: string,
  password: string,
): Promise<string> {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      { username, password },
      { headers: { "Content-Type": "application/json" } },
    );

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data || "Error en login");
  }
}
