import type { Request } from "express";

export interface DbUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface jwtPayload {
  id: string;
  email: string;
}

export interface AuthRequest extends Request {
  user?: jwtPayload;
}
