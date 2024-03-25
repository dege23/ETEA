import { Router } from "express";
import newUser from "../../data/users/newUser.mjs";
const routerUsers = Router();

routerUsers.post("/users/register", (req, res) => {
  const { fullName, userName, email, password, birthDate } = req.body;

  if (!fullName) {
    return res.status(400).json({
      success: false,
      message: "Nome completo é obrigatório!",
    });
  }
  if (!userName) {
    return res.status(400).json({
      success: false,
      message: "Nome de usuário é obrigatório!",
    });
  }
  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email é obrigatório!",
    });
  }
  if (!password) {
    return res.status(400).json({
      success: false,
      message: "Senha é obrigatória!",
    });
  }
  if (!birthDate) {
    return res.status(400).json({
      success: false,
      message: "Data de nascimento é obrigatória!",
    });
  }

  newUser(res, { fullName, userName, email, password, birthDate });
  res.setHeader("Content-Type", "application/json");
});

export default routerUsers;
