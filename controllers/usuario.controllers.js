const Usuario = require('../models/Usuario.js');
const bcryptjs = require('bcryptjs')

const getUsers = (req, res)=>{
    res.json({
        "message": "home page"
})
}

const postUsers = async (req, res)=>{

    

    const {nombre, email, password, rol} = req.body;
    const usuario = new Usuario({nombre, email, password, rol});

    // Verificar correo existente

    const emailExists = await usuario.findOne({email});
    if(emailExists){
        return res.status(400).json({
            msg: "Email is already in use"
        })
    }

    // Encriptación

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);


    await usuario.save();
    res.json({
        "message": "post api",
        usuario
    })
}

const deleteUsers = (req, res)=>{
    res.json({
        "message": "delete api"
    })
}   

const putUsers = (req, res)=>{
    res.json({
        "message": "put api"
    })
}

const patchUsers = (req, res)=>{
    res.json({
        "message": "patch api"
        })
}

module.exports = {
    getUsers,
    postUsers,
    deleteUsers,
    putUsers,
    patchUsers
}