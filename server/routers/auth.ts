import { Router } from "express";
import type { Request, Response } from "express";
import { SignupRequest, LoginRequest } from "../../shared/types";
import { users } from "../constans";
import bcrypt from "bcrypt";
import { DbUser, AuthRequest } from "../types";
import { randomUUID } from "crypto";
import { generateToken, mapToPublicuser } from "../utils";
import { authMiddleware } from "../middlewares/auth";

const router = Router();

router.post("/signup", async (req: Request<SignupRequest>, res: Response) => {
  const name = req.body.name?.trim();
  const email = req.body.email?.trim();
  const password = req.body.password?.trim();

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All inputs required" });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters" });
  }
  if (users.find((u) => u.email === email)) {
    return res.status(409).json({ error: "User already exists" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: DbUser = {
      name,
      email,
      password: hashedPassword,
      id: randomUUID(),
    };
    users.push(newUser);
    const token = generateToken(newUser);
    return res.status(201).json({ token, user: mapToPublicuser(newUser) });
  } catch {
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req: Request<LoginRequest>, res: Response) => {
  const email = req.body.email?.trim();
  const password = req.body.password?.trim();

  if (!email || !password) {
    return res.status(400).json({ error: "All inputs required" });
  }
  try {
    const exsitinUser = users.find((u) => u.email === email);
    const isValidPassword = exsitinUser
      ? await bcrypt.compare(password, exsitinUser.password)
      : false;
    if (!exsitinUser || !isValidPassword) {
      return res
        .status(401)
        .json({ error: "Unauthorized invalid credentials" });
    }
    const token = generateToken(exsitinUser);
    return res.status(201).json({ token, user: mapToPublicuser(exsitinUser) });
  } catch {
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/user", authMiddleware, async (req: AuthRequest, res: Response) => {
  const decoded = req.user;
  if (!decoded) {
    return res.status(404).json({ error: "User not found" });
  }
  const userId = decoded.id;
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.status(200).json(mapToPublicuser(user));
});

export default router;
