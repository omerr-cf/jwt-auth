import type { Response, NextFunction } from "express";
import type { AuthRequest, jwtPayload } from "../types";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constans";

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const headers = req.headers.authorization;
  if (!headers || !headers.startsWith("Bearer")) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const token = headers.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as jwtPayload;
    req.user = {
      id: String(decoded.id),
      email: String(decoded.email),
    };
    next();
  } catch {
    return res.status(401).json({ error: "Unauthorized" });
  }
};
