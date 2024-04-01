import { Router } from "express";
import newUser from "../../data/users/newUser.mjs";
import {
  isValidFullName,
  isValidUsername,
  isValidEmail,
  isValidDateOfBirth,
} from "../../data/validates/users/index.mjs";
const routerUsers = Router();
// import { debug } from "console";

routerUsers.post("/users/register", async (req, res) => {
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
  // Verify if full name dont have symbols
  if (!isValidFullName(fullName)) {
    return res.status(400).json({
      success: false,
      message: "Nome completo só pode conter letras!",
    });
  }
  // Verify if username dont have symbols
  if (!isValidUsername(userName)) {
    return res.status(400).json({
      success: false,
      message: "Nome de usuário só pode conter letras e '.'!",
    });
  }
  // Verify if email is valid
  const isValidateEmail = await isValidEmail(email);
  if (!isValidateEmail.valid) {
    return res.status(400).json({
      success: false,
      message: "Email inválido!",
    });
  }
  // Verify if date of birth is valid
  const [day, month, year] = birthDate.split("-");
  if (!isValidDateOfBirth(day, month, year)) {
    return res.status(400).json({
      success: false,
      message: "Data de nascimento inválida!",
    });
  }

  newUser(res, { fullName, userName, email, password, birthDate });
  res.setHeader("Content-Type", "application/json");
});

export default routerUsers;
