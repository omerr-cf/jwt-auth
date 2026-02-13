import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/auth";
import { AUTH_QUERY_KEYS } from "../constants";

export const useUserQuery = () => {
  return useQuery({
    queryFn: getUser,
    queryKey: AUTH_QUERY_KEYS.user,
  });
};
