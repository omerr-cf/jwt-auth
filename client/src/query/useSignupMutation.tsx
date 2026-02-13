import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/auth";
import { AUTH_QUERY_KEYS, queryClient, TOKEN_KEY } from "../constants";

export const useSignupMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signup,
    onSuccess(data) {
      navigate("/profile");
      localStorage.setItem(TOKEN_KEY, data?.token);
      queryClient.invalidateQueries({ queryKey: AUTH_QUERY_KEYS.user });
    },
  });
};
