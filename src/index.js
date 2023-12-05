import  Express  from "express";
import routes from './routes/index.js'
import ruta from './index.route.js'

const App = Express();

 App.use(routes);
 App.use(ruta)


App.listen(3000, ()=>{
    console.log('Run on port 3000');
});
