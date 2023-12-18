import {Conexion} from '../routes/db.js'

export const All = async (req, resp)=>{ 
    try {
        const [rows]= await Conexion.query('SELECT * FROM empleados');
        resp.send(rows);
    } catch (error) {
        return resp.status(500).json({
            message: "Algo está mal"
        })
    }
}

export const getOne = async(req, resp) =>{
    try {
        const [rows] = await Conexion.query('SELECT * FROM empleados WHERE id= ? ', [req.params.id])
        console.log(rows);
    
        if (rows.length <= 0) return resp.status(404).json({
            message: 'Empleado no encontrado'
        });
    
        resp.json(rows[0]);
    } catch (error) {
        return resp.status(500).json({
            message: "Algo está mal"
        })
    }
}

export const InsertEmpleado = async (req, resp)=>{ 
    try {
        const {nombre, salario} = req.body
        const [rows] = await Conexion.query('INSERT INTO empleados (nombre, salario) VALUE (?, ?)', [nombre, salario]);
        resp.send({id: rows.insertId, nombre, salario});  
    } catch (error) {
        return resp.status(500).json({
            message: "Algo está mal"
        })
    }
}

export const UpdateEmpleado = async (req, resp)=>{ 
    try {
        const {id} = req.params;
        const {nombre, salario} = req.body;
        const [result] = await Conexion.query('UPDATE empleados SET nombre=IFNULL(?, nombre), salario=IFNULL(?, salario) WHERE id=?', [nombre, salario, id])
        
        if(result.affectedRows === 0){
            return resp.sendStatus(404).json({
                message: "Empleado no actualizado"
            })
    
        }
        const [rows] = await Conexion.query('SELECT * FROM empleados WHERE id=?', [id])
        resp.json(rows[0])

    } catch (error) {
        return resp.status(500).json({
            message: "Algo está mal"
        })
    }
}

export const DeleteEmpleado =  async (req, resp)=>{ 
    try {
        const [result ]= await Conexion.query('DELETE FROM empleados WHERE id=?', [req.params.id])
        if(result.affectedRows <= 0){ return resp.status(404).json({
            message: 'Empleado no eliminado'
        })}
        resp.sendStatus(204);
    } catch (error) {
        return resp.status(500).json({
            message: "Algo está mal"
        })
    }
}
