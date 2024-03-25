import express from "express";
import { debug } from "console";
import routerUsers from "./routes/users/index.mjs";
import routerFrontend from "./routes/frontend/index.mjs";

const PORT = 3000;
const app = express();
app.use(express.json());

app.use(routerUsers);
app.use(routerFrontend);

app.listen(PORT, () => {
  debug(`Server listening on port ${PORT}`);
});
