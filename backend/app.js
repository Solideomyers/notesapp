import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index.js";

export const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(morgan("dev"));

// routes
server.use("/", routes);
