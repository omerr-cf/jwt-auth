import { QueryClient } from "@tanstack/react-query";

export const TOKEN_KEY = "token";
export const queryClient = new QueryClient();

export const AUTH_QUERY_KEYS = {
  user: ["users"] as const,
};

export const baseUrl = import.meta.env.VITE_BASE_URL;
