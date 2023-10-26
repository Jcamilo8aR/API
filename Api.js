import express from "express";
import { rutasAPI } from "./routes/rutasHoteles.js";
import { establecerConexionBD } from "./database/conexion.js";


export class Api{
    constructor(){
        this.app=express()
        this.procesarPeticiones() //HACEMOS QUE APENAS SE CONTRUYA PROCESO LAS PETICIONES
        this.conectarBD()
    }


    // 1.Levantar servidor
    levantarServidor(){
        this.app.listen(3000,function(){
            console.log("Servidor Operando");
        })
    }




    // 2.Atiende las petiicones
    procesarPeticiones(){
        //this.app nos referimos a express, el use es que vamos a ayudar a express a que haga algo
        this.app.use("/",rutasAPI)
        this.app.use(express.json())
    }




    // 3. se conecta con la base de datos
    conectarBD(){
        establecerConexionBD()
    }
   


}
