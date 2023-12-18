import { Router } from "express";
import {All,InsertEmpleado,UpdateEmpleado, DeleteEmpleado, getOne} from "../controllers/controllerEmpleados.js";

const routes = Router();

routes.get('/Empleados', All);
routes.get('/Empleados/:id', getOne);
routes.post('/:Empleados', InsertEmpleado)
routes.patch('/Empleados/:id', UpdateEmpleado)
routes.delete('/Empleados/:id', DeleteEmpleado)

export default routes;