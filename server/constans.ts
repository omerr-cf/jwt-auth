import type { DbUser } from "./types";

export const users: DbUser[] = [];
export const JWT_SECRET = process.env.JWT_SECRET || "yousecret";
export const JWT_EXPIRES_IN = "15m";
