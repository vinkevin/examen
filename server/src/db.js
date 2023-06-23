import { createPool } from "mysql2/promise";

export const pool = new createPool({
    host: "localhost",
    port: "33065",
    user: "root",
    password: "",
    database: "tienda"
});