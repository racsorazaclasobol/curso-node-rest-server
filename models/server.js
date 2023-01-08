import express from 'express';
import cors from 'cors'
import user from '../routes/usuarios.js'
import { dbConnection } from '../database/config.js';


class Server {

    constructor() {
        this.app = express();
		this.port = process.env.PORT || 3000;

		//Base de datos
		this.conectarDB();

		//Rutas
		this.usuariosRoutePath = '/api/usuarios';

		//Middlewares
		this.middlewares();

		//Rutas de la aplicación
		this.routes();
    }

	middlewares() {
		//CORS
		this.app.use(cors())

		// Lectura y Parseo del Body
		this.app.use( express.json() );

		//Directorio público
		this.app.use( express.static('public') )
	}

    routes() {

		this.app.use( this.usuariosRoutePath, user );
        
    }

	listen() {
		this.app.listen(this.port, () => {
			console.log("Servidor corriendo en puerto: ", this.port)
		})
	}

	async conectarDB(){
		await dbConnection();
	}

}

export default Server;