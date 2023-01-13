import express from 'express';
import cors from 'cors'

import { AuthRouter, UsuarioRouter, CategoriaRouter, ProductoRouter, BuscarRouter } from '../routes/index.js'

import { dbConnection } from '../database/config.js';


class Server {

    constructor() {
        this.app = express();
		this.port = process.env.PORT || 3000;

		//Base de datos
		this.conectarDB();

		//Rutas
		this.rutasPath = {
			authPath: '/api/auth',
			buscarPath: '/api/buscar',
			usuarioPath: '/api/usuarios',
			categoriaPath: '/api/categorias',
			productoPath: '/api/productos'
		};

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
		
		const { authPath, buscarPath, usuarioPath, categoriaPath, productoPath } = this.rutasPath;

		this.app.use( authPath, AuthRouter );
		this.app.use( buscarPath, BuscarRouter )
		this.app.use( usuarioPath, UsuarioRouter );
		this.app.use( categoriaPath, CategoriaRouter );
		this.app.use( productoPath, ProductoRouter );
        
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