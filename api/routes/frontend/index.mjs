import express, { Router } from "express";

const routerFrontend = Router();

routerFrontend.use(express.static("../frontend/dist"));

export default routerFrontend;
