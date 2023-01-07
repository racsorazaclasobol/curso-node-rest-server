//Creado en el capítulo 110
import { response, request } from 'express'

const usuariosGet = (req = request, res = response) => {

    const body = req.body;
    const querys = req.query;

    res.json({
        msg: 'Get: Mensaje de respuesta desde Controlador',
        body,
        querys
    })

}

const usuariosPut = (req = request, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'Put: Mensaje de respuesta desde Controlador',
        id
    })

}

const usuariosPost = (req, res = response) => {

    res.json({
        msg: 'Post: Mensaje de respuesta desde Controlador'
    })

}

const usuariosDelete = (req, res = response) => {

    res.json({
        msg: 'Delete: Mensaje de respuesta desde Controlador'
    })

}

export {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}