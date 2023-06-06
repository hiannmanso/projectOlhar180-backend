import {
  router_default
} from "./chunk-3DSGFCFE.mjs";
import {
  handdleError
} from "./chunk-EDZNN5W2.mjs";

// src/app.ts
import express from "express";
import "express-async-errors";
import cors from "cors";
var server = express();
server.use(cors());
server.use(express.json());
server.use(router_default);
server.use(handdleError);
var app_default = server;

export {
  app_default
};
