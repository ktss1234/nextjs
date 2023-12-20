import { User } from "@/store/slices/userSlice";
import httpClient from "@/utils/httpClient";

type signProps = User
export const signUp = async (user: signProps): Promise<any> => {
  const response = await httpClient.post<any>("/authen/register", user);
  return response.data;
};