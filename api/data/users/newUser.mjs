import conn from "../../db.mjs";
import { debug } from "console";

const newUser = async (
  res,
  { fullName, userName, email, password, birthDate }
) => {
  try {
    // Verify if user exists
    const sql = "SELECT * FROM `users` WHERE email =? OR userName =?";
    const [rows] = await conn.execute(sql, [email, userName]);
    if (rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Usuário já existe!",
      });
    }

    // Insert user
    const sql2 =
      "INSERT INTO `users` (fullName, userName, email, password, birthDate) VALUES (?,?,?,?,?)";
    await conn.execute(sql2, [fullName, userName, email, password, birthDate]);

    debug(conn);

    return res.status(200).json({
      success: true,
      message: "Usuário criado com sucesso!",
    });
  } catch (error) {
    // Handle any errors
    debug("Erro ao criar usuário:", error);
    return res.status(500).json({
      success: false,
      message: "Ocorreu um erro ao criar o usuário.",
    });
  }
};

export default newUser;
