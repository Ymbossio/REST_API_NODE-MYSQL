
import { Router } from "express";


const routes = Router();

routes.get('/Empleados', (req, resp)=>{ resp.send('Obtener Empleados');  })
routes.post('/:Empleados', (req, resp)=>{ resp.send('Enviar Empleados');  })
routes.put('/:Empleados', (req, resp)=>{ resp.send('Actualizar Empleados');  })
routes.delete('/:Empleados', (req, resp)=>{ resp.send('Eliminar Empleados');  })

export default routes;