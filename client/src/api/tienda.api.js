import axios from "axios";

export const getRopa = async() =>
    await axios.get("http://localhost:4000/tienda");

export const getAgotado = async() =>
    await axios.get("http://localhost:4000/agotado");