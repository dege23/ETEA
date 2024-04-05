import { Router } from "express";
import newUser from "../../data/users/newUser.mjs";
import {
  isValidFullNamePattern,
  isValidUsernamePattern,
  validateEmail,
  isValidBirthDate,
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
  // Validar pattern de nome completo
  if (!isValidFullNamePattern(fullName)) {
    return res.status(400).json({
      success: false,
      message: "Nome completo só pode conter letras!",
    });
  }
  // Verificar se o nome de usuário começa ou termina com '.'
  if (userName.startsWith(".") || userName.endsWith(".")) {
    return res.status(400).json({
      success: false,
      message: "O nome de usuário não pode iniciar ou terminar com '.'",
    });
  }
  // Verificar se o nome de usuário tem entre 4 e 20 caracteres
  if (userName.length < 4 || userName.length > 20) {
    return res.status(400).json({
      success: false,
      message: "O nome de usuário deve ter entre 4 e 20 caracteres!",
    });
  }
  // Validar pattern de username
  if (!isValidUsernamePattern(userName)) {
    return res.status(400).json({
      success: false,
      message: "Nome de usuário inválido!",
      data: "/^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*$/",
    });
  }
  // Validar pattern de email
  const isValidEmail = await validateEmail(email);
  if (!isValidEmail.valid) {
    return res.status(400).json({
      success: false,
      message: "Email inválido!",
    });
  }
  // Verificar se a senha tem entre 6 e 20 caracteres
  if (password.length < 6 || password.length > 20) {
    return res.status(400).json({
      success: false,
      message: "A senha deve ter entre 6 e 20 caracteres!",
    });
  }
  // Validar pattern de data de nascimento
  const [year, month, day] = birthDate.split("-");
  if (!isValidBirthDate(year, month, day)) {
    return res.status(400).json({
      success: false,
      message: "Data de nascimento inválida!",
    });
  }

  const toDBBirthDate = `${year}-${month}-${day}`;

  newUser(res, {
    fullName,
    userName,
    email,
    password,
    birthDate: toDBBirthDate,
  });
  res.setHeader("Content-Type", "application/json");
});

export default routerUsers;
