import { SignIn } from "@/models/auth.model";
import httpClient from "../utils/httpClient";

type signProps = {
  username: string;
  password: string;
};

export const signUp = async (user: signProps): Promise<any> => {
  const response = await httpClient.post<any>("/authen/register", user);
  return response.data;
};
export const signIn = async (user: signProps): Promise<SignIn> => {
  const response = await httpClient.post<SignIn>("/authen/login", user, {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_LOCAL_API,
  });
  return response.data;
};
