import apiclient from "../../services/api-client";

export const signup = async (values: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await apiclient.post("/users/signup", values);
    return response;
  } catch (error) {
    throw error;
  }
};