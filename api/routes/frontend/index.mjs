import express, { Router } from "express";

const routerFrontend = Router();

if (process.env.NODE_ENV === "prod") {
  routerFrontend.use(express.static("../frontend/dist"));
}

export default routerFrontend;
