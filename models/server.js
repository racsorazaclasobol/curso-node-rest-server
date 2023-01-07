import express from 'express';
import cors from 'cors'
import user from '../routes/usuarios.js'


class Server {

    constructor() {
        this.app = express();
		this.port = process.env.PORT;

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

}

export default Server;