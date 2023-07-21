const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config.js');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.port
        this.usuariosPath = "/api/usuarios";
        this.conexion();
        this.middlewares();
        this.routes();

    }

    async conexion(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuario.routes.js'));
    }
    
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server running on port: ${this.port}`)
        })
    
    }
    }
    
    module.exports = Server;



