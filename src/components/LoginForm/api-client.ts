
import apiclient from "../../services/api-client";

export async function login(credentials: { email: string; password: string }) {
  return apiclient.post("/auth", credentials);
}