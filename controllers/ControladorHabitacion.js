import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorHabitacion{
        constructor(){}
       
        async buscarTodas(request,response){
            // Ejercicios logica de negocio
            try{
                let servicioHabitacion=new ServicioHabitacion()
                // 1. Hay que recibir datos?
                // 2. Intentare conectarme a la BD
                // 3. Envio la respuesta
                response.status(200).json({
                        "estado":true,
                        "mensaje":"Exito buscando las habitaciones",
                        "datos":servicioHabitacion.buscarTodas()
            })
            }catch(error){
                response.status(400).json({
                        "estado":false,
                        "mensaje":"Error buscando las habitaciones "+error,
                        "datos":null
            })
            }
        }

        async buscarID(request,response){
            try{    
                let servicioHabitacion=new ServicioHabitacion(id)
                // 1. Hay que recibir datos? (si)
                let id=request.params.id
                // 2. Con el id que mando el cliente busco la habitacion en BD
                // 3. Respondo al cliente
                response.status(200).json({
                        "estado":true,
                        "mensaje":"Exito buscando las habitaciones",
                        "datos":await servicioHabitacion.buscarID()
                })      
            }catch(error){
                response.status(400).json({
                        "estado":false,
                        "mensaje":"Error buscando las habitaciones "+error,
                        "datos":null
                })
            }
        }

        async modificar(request,response){
            try{
                let servicioHabitacion=new ServicioHabitacion()
                // 1. Hay que recibir datos? (si)
                let id = request.params.id
                let datos=request.body
                // 2. Modificar en BD
                // 3. Enviar la respuesta
                await servicioHabitacion.modificar(id,datos) //DATOS
                response.status(200).json({
                        "estado":true,
                        "mensaje":"Exito modificando la habitacion",
                        "datos": "aca los datos" 
                })  
            }catch(error){
                response.status(400).json({
                        "estado":false,
                        "mensaje":"Error modificando la habitacion "+error,
                        "datos":null
                })
            }
        }

        async registrar(request,response){
            try{
                let servicioHabitacion=new ServicioHabitacion()
                // 1. Hay que recibir datos? (si)
                // let id = request.params.id
                let datos=request.body
                // 2. Modificar en BD
                // 3. Enviar la respuest
                // await servicioHabitacion.registrar(datos)
            response.status(200).json({
                    "estado":true,
                    "mensaje":"Exito registrando la habitacion",
                    "datos":datos
                    })  
            }catch(error){
                response.status(400).json({
                    "estado":false,
                    "mensaje":"Error registrando la habitacion "+error,
                    "datos":null
                })
            }
        }

        async eliminar(request,response){
            try{
                let servicioHabitacion=new ServicioHabitacion(id)
                // 1. Hay que recibir datos? (si)
                let id = request.params.id
                // 2. Modificar en BD
                // 3. Enviar la respuesta
                response.status(200).json({
                        "estado":true,
                        "mensaje":"Exito borrando la habitacion",
                        "datos":null
                })  

            }catch(error){
                response.status(400).json({
                        "estado":false,
                        "mensaje":"Error borrando la habitacion "+error,
                        "datos":null
                })
            }
        }
    }
    