import { Router } from "express";
import { z } from "zod";

export const authRouter = Router();

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

authRouter.post("/login", async (req, res) => {
  const parsed = LoginSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Dados inválidos" });

  return res.status(501).json({
    error: "Login ainda não configurado. Próximo passo: conectar MySQL e ativação por link."
  });
});

authRouter.post("/activate", async (req, res) => {
  return res.status(501).json({
    error: "Ativação ainda não configurada. Próximo passo: conectar MySQL e ativação por link."
  });
});
