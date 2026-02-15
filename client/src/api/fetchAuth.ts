import type {
  AuthResponse,
  LoginRequest,
  PublicUser,
  SignupRequest,
} from "../../../shared/types";
import type { ApiErrorResponse } from "../types";
import { fetchClient } from "./fetchClient";

const getErrorMessage = (data: unknown, fallback: string) => {
  if (
    data &&
    typeof data === "object" &&
    "error" in data &&
    typeof data.error === "string"
  ) {
    return data.error;
  }
  return fallback;
};

export const fetchSignup = async (
  user: SignupRequest,
): Promise<AuthResponse> => {
  const res = await fetchClient("/signup", {
    method: "POST",
    body: JSON.stringify(user),
  });
  const data = (await res.json().catch(() => null)) as
    | AuthResponse
    | ApiErrorResponse
    | null;

  if (!res.ok) {
    throw new Error(getErrorMessage(data, "Signup failed"));
  }

  return data as AuthResponse;
};

export const fetchLogin = async (user: LoginRequest): Promise<AuthResponse> => {
  const res = await fetchClient("/login", {
    method: "POST",
    body: JSON.stringify(user),
  });
  const data = (await res.json().catch(() => null)) as
    | AuthResponse
    | ApiErrorResponse
    | null;

  if (!res.ok) {
    throw new Error(getErrorMessage(data, "Login failed"));
  }

  return data as AuthResponse;
};

export const fetchUser = async (): Promise<PublicUser> => {
  const res = await fetchClient("/user", {
    method: "GET",
    withAuth: true,
  });
  const data = (await res.json().catch(() => null)) as
    | PublicUser
    | ApiErrorResponse
    | null;

  if (!res.ok) {
    throw new Error(getErrorMessage(data, "Fetching user failed"));
  }

  return data as PublicUser;
};
