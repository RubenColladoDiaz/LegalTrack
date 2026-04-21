import axios from "axios";
import type { Client } from "../types/Client";

const API_URL = "http://localhost:8080/api";

export async function getClientsByLawyerId(
  lawyerId: number,
): Promise<Client[]> {
  try {
    const { data } = await axios.get<Client[]>(`${API_URL}/clients`, {
      params: { lawyerId },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          "Error al conseguir los clientes de este abogado",
      );
    }

    throw new Error("Error inesperado");
  }
}
