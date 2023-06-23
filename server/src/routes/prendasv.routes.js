import { Router } from "express";
import { getPrendas, getAgotados } from "../controllers/prendasv.controllers.js";

const router = Router();
router.get("/tienda", getPrendas);
router.get("/agotado", getAgotados);
export default router;