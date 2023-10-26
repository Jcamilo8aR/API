import { ServicioReserva } from "../services/ServicioReserva.js"

export class ControladorReservas{
        constructor(){}
       
        async buscarTodas(request,response){
            // Ejercicios logica de negocio
            try{
                let servicioReserva=new ServicioReserva()
                // 1. Hay que recibir datos?
                // 2. Intentare conectarme a la BD
                // 3. Envio la respuesta
                response.status(200).json({
                        "estado":true,
                        "mensaje":"Exito buscando las reservaes",
                        "datos":await servicioReserva.buscarTodas()
            })
            }catch(error){
                response.status(400).json({
                        "estado":false,
                        "mensaje":"Error buscando las reservaes "+error,
                        "datos":null
                })
            }
        }

        async buscarID(request,response){
            try{    
                let servicioReserva=new ServicioReserva()
                // 1. Hay que recibir datos? (si)
                let id=request.params.id
                // 2. Con el id que mando el cliente busco la reserva en BD
                // 3. Respondo al cliente
                response.status(200).json({
                        "estado":true,
                        "mensaje":"Exito buscando las reservas",
                        "datos":await servicioReserva.buscarID(id)
                })      
            }catch(error){
                response.status(400).json({
                        "estado":false,
                        "mensaje":"Error buscando las reservas "+error,
                        "datos":null
                })
            }
        }

        async modificar(request,response){
            try{
                let servicioReserva=new ServicioReserva()
                // 1. Hay que recibir datos? (si)
                let id = request.params.id
                let datos=request.body
                // 2. Modificar en BD
                // 3. Enviar la respuesta
                await servicioReserva.modificar(id,datos)
                response.status(200).json({
                        "estado":true,
                        "mensaje":"Exito modificando la reserva",
                        "datos":null
                })  
            }catch(error){
                response.status(400).json({
                        "estado":false,
                        "mensaje":"Error modificando la reserva "+error,
                        "datos":null
                })
            }
        }

        async registrar(request,response){
            try{
                let servicioReserva=new ServicioReserva()
                // 1. Hay que recibir datos? (si)
                let id = request.params.id
                let datos=request.body
                /* Tomar 2 fechas del objeto datos
                diferencia en dias de esas 2 fechas */
                // 2. Modificar en BD
                // 3. Enviar la respuesta
                //await servicioReserva.registrar(datos)
                response.status(200).json({
                        "estado":true,
                        "mensaje":"Exito modificando la reserva",
                        "datos":datos,
                        "diferencia":"diferencia en dias calculada"
                })  
            }catch(error){
                response.status(400).json({
                        "estado":false,
                        "mensaje":"Error modificando la reserva "+error,
                        "datos":null
                })
            }
        }

        async eliminar(request,response){
            try{
                let servicioReserva=new ServicioReserva()
                // 1. Hay que recibir datos? (si)
                let id = request.params.id
                // 2. Modificar en BD
                // 3. Enviar la respuesta
                response.status(200).json({
                        "estado":true,
                        "mensaje":"Exito borrando la reserva",
                        "datos":null
                })  
    
    
            }catch(error){
                response.status(400).json({
                        "estado":false,
                        "mensaje":"Error borrando la reserva "+error,
                        "datos":null
                })
            }
        }
    }
    
    
    