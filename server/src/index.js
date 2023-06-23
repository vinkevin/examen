import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import prendasv from "./routes/prendasv.routes.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(prendasv);
app.listen(PORT);
console.log("servidor ejecutando en el puerto", PORT);