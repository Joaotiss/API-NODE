import express from "express";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// cadastro

router.post("/cadastro", async (req, res) => {
  try {
    // lógica de cadastro
    const user = req.body;

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(user.password, salt)

    const userDB = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: hashPassword,
      },
    });
    res.status(201).json(userDB);
  } catch (err) {
    res.status(500).json({ error: "Erro ao cadastrar usuário" });
  }
});

export default router;

//joaotiso09
//h2BImA6C4iCT7SbD
//mongodb+srv://joaotiso09:<db_password>@cluster0.lpasjhs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
