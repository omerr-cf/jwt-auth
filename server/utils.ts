import { DbUser, jwtPayload } from "./types";
import { PublicUser } from "../shared/types";
import { JWT_SECRET, JWT_EXPIRES_IN } from "./constans";
import jwt from "jsonwebtoken";

export const generateToken = (user: DbUser) => {
  const payload: jwtPayload = { id: user.id, email: user.email };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

  return token;
};

export const mapToPublicuser = (user: DbUser): PublicUser => ({
  id: user.id,
  email: user.email,
  name: user.name,
});
