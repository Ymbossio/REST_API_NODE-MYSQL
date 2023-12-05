import { Router } from "express";
import { Conexion } from "./routes/db.js";

const ruta = Router();

ruta.get('/connect', async (req, resp)=>{
    const [result] = await Conexion.query('SELECT "YOVANIS" AS result');
    resp.json(result[0]);
})

export default ruta;
