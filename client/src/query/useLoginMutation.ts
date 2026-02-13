import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { queryClient, TOKEN_KEY } from "../constants";
import { useNavigate } from "react-router-dom";

export const useLoginMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: login,
    onSuccess(data) {
      localStorage.setItem(TOKEN_KEY, data?.token);
      navigate("/profile");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
