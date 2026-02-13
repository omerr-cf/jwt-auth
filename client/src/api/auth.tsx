import { api } from "../api/index";
import type {
  SignupRequest,
  AuthResponse,
  LoginRequest,
  PublicUser,
} from "../../../shared/types";

export const signup = async (user: SignupRequest): Promise<AuthResponse> => {
  const res = await api.post("/signup", user);
  return res.data;
};

export const login = async (user: LoginRequest): Promise<AuthResponse> => {
  const res = await api.post("/login", user);
  return res.data;
};

export const getUser = async (): Promise<PublicUser> => {
  const res = await api.get("/user");
  return res.data;
};
