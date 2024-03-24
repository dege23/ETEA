import express from "express";
import { debug } from "console";

const PORT = 3000;
const app = express();
s
app.listen(PORT, () => {
  debug(`Server listening on port ${PORT}`);
});
