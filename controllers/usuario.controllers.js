const Usuario = require('../models/Usuario.js')

const getUsers = (req, res)=>{
    res.json({
        "message": "home page"
})
}

const postUsers = async (req, res)=>{
    const body = req.body;
    const usuario = new Usuario(body);
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