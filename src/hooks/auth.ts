import { useMutation } from "@tanstack/react-query";
import { loginService } from "../services/auth";
import { LoginData } from "../types/auth/login";

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginData) => loginService(data.username, data.password),
    onSuccess: (data) => {
      
    },
    onError: (error: any) => {
      // Logic for global error handling
      console.error("Mutation Error:", error.response?.data?.message || error.message);
    }
  });
};