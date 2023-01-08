import Role from '../models/role.js'
import Usuario from '../models/usuario.js'

const isRolValido = async(rol = '') => { //Capitulo 130 y 131

    const existe = await Role.findOne({ rol })

    if( !existe ) throw new Error( `El rol '${ rol }' no está registrado en la Base de datos` )

}

const isEmailExist = async( correo = '' ) => {

    const existeEmail = await Usuario.findOne({ correo });

    if( existeEmail ) throw new Error( `El correo '${ correo }' ya está registrado` );

}

const isIdExist = async( id ) => {

    const existeId = await Usuario.findById( id );

    if( !existeId ) throw new Error( `El id '${ id }' no existe` );

}

export {
    isRolValido,
    isEmailExist,
    isIdExist
}

