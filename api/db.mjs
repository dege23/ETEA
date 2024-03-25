import mysql2 from "mysql2/promise";
import { config } from "dotenv";
import { debug } from "node:console";

config();

const conn = await mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

export default conn;
