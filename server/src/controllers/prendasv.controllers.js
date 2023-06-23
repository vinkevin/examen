import { pool } from "../db.js";

export const getPrendas = async(req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM prendasv where cantidad>0"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const getAgotados = async(req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM prendasv where cantidad=0"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}