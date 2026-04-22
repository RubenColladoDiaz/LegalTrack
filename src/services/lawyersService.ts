import axios from "axios";
import type { Lawyer } from "../types/Lawyer";

const API_URL = "http://localhost:8080/api";

export async function getLawyersByAdminId(userId: number): Promise<Lawyer[]> {
  try {
    const { data } = await axios.get<Lawyer[]>(`${API_URL}/lawyers`, {
      params: { userId },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          "Error al conseguir los abogados de este administrador",
      );
    }

    throw new Error("Error inesperado");
  }
}
