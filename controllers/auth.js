import { response, request } from 'express';
import bcryptjs from 'bcryptjs'

import Usuario from '../models/usuario.js'
import { generarJWT } from '../helpers/manager-jwt.js';


const authLogin = async( req = request, res = response ) => {

    try {

        const { correo, password } = req.body;

        const usuario = await Usuario.findOne({ correo });

        const validPassword = bcryptjs.compareSync( password, usuario.password ) //Compara los passwords

        if( !validPassword ) return res.status(400).json({ msg: 'Usuario y/o password son incorrectos - Password' })

        //*: Generar JWT
        const token = await generarJWT( usuario.id );
        
        res.json({
            usuario,
            token
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error, intentelo más tarde'
        })
    }
}

export {
    authLogin,

}