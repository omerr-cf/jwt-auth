import { useState } from "react";
import type { AuthAction } from "../types";
import { useLoginMutation } from "../query/useLoginMutation";
import { useSignupMutation } from "../query/useSignupMutation";

export const useAuthForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const loginmutation = useLoginMutation();
  const singupmutation = useSignupMutation();

  const handleUseAuth = async (action: AuthAction) => {
    if (action === "login") {
      return await loginmutation.mutateAsync({ email, password });
    }
    return await singupmutation.mutateAsync({ email, password, name });
  };
  const isLoading = singupmutation.isPending || loginmutation.isPending;
  const error = singupmutation.error || loginmutation.error;

  return {
    name,
    email,
    password,

    //setters
    setName,
    setEmail,
    setPassword,
    //func
    handleUseAuth,
    isLoading,
    error,
  };
};
