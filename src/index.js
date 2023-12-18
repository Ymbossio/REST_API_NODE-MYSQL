import  Express  from "express";
import routes from './routes/index.js'
import ruta from './index.route.js'

const App = Express();

App.use(Express.json())

App.use(routes);
App.use(ruta)
App.use((req, resp)=>{
    return resp.status(404).json({
        message: "Endpoint no encontrado"
    })
})


App.listen(3000, ()=>{
    console.log('Run on port 3000');
});
