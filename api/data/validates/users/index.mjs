import { validate } from "deep-email-validator";

// Padrão para nome completo
const fullNamePattern = /^[a-zA-ZÀ-ÿ\s]+$/;
const usernamePattern = /^[a-zA-Z0-9_]+(?:\.[a-zA-Z0-9_]+)*$/;

// Validar nome completo
const isValidFullNamePattern = (fullName) => {
  return fullNamePattern.test(fullName);
};

// Validar nome de usuário
const isValidUsernamePattern = (username) => {
  return usernamePattern.test(username);
};

const validateEmail = async (email) => {
  return await validate(email);
};

// Validar data de nascimento
const isValidBirthDate = (year, month, day) => {
  // Converter os valores para números inteiros
  year = parseInt(year);
  month = parseInt(month);
  day = parseInt(day);

  // Verificar se os valores estão dentro dos intervalos válidos
  return (
    year >= 1900 &&
    year <= new Date().getFullYear() &&
    month >= 1 &&
    month <= 12 &&
    day >= 1 &&
    day <= 31
  );
};

export {
  fullNamePattern,
  usernamePattern,
  isValidFullNamePattern,
  validateEmail,
  isValidUsernamePattern,
  isValidBirthDate,
};
