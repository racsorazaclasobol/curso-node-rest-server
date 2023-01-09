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

const isLoginValid = async( correo = '' ) => {

    const usuario = await Usuario.findOne({ correo });
    
    if( !usuario ) return res.status(400).json({ msg: 'Usuario y/o password son incorrectos - Correo' });

    if( !usuario.estado ) return res.status(400).json({ msg: 'Usuario dehabilitado' });

}

const isIdExist = async( id ) => {

    const existeId = await Usuario.findById( id );

    if( !existeId ) throw new Error( `El id '${ id }' no existe` );

}

const isAdminRol = async( id ) => {

    console.log(id)
    const { uid, nombre, rol } = await Usuario.findById( id );
    console.log(uid)
    console.log(nombre)
    console.log(rol)

    if( rol !== 'ADMIN_ROLE' ) throw new Error( `El rol '${ rol }' no está autorizado para esta tarea` )

}

export {
    isRolValido,
    isEmailExist,
    isLoginValid,
    isIdExist,
    isAdminRol
}

