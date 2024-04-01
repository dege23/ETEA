import { validate } from "deep-email-validator";

// Padrão para nome completo
const fullNamePattern = /^[a-zA-ZÀ-ÿ\s]+$/;
const usernamePattern = /^[a-zA-Z]+(?:\.[a-zA-Z]+)*$/;

// Validar nome completo
const isValidFullName = (fullName) => {
  return fullNamePattern.test(fullName);
};

// Validar nome de usuário
const isValidUsername = (username) => {
  return usernamePattern.test(username);
};

const isValidEmail = async (email) => {
  return await validate(email);
};

// Validar data de nascimento
const isValidDateOfBirth = (day, month, year) => {
  // Converter os valores para números inteiros
  day = parseInt(day);
  month = parseInt(month);
  year = parseInt(year);

  // Verificar se os valores estão dentro dos intervalos válidos
  return (
    day >= 1 && day <= 31 &&
    month >= 1 && month <= 12 &&
    year >= 1900 && year <= new Date().getFullYear()
  );
};

export {
  fullNamePattern,
  usernamePattern,
  isValidFullName,
  isValidEmail,
  isValidUsername,
  isValidDateOfBirth,
};
