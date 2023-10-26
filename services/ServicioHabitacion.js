// importamos el modelo
import {modeloHabitacion} from'../models/modeloHabitacion.js'
export class ServicioHabitacion{

    constructor(){}
        //por cada metodo en el controlador, ponemos un metodo en el servicio
        async buscarTodas(){
            let habitaciones=await modeloHabitacion.find()
        }
        async buscarID(id){
            let habitacion=await modeloHabitacion.findById(id)
            return habitacion()
        }
        async modificar(id,datos){
            return await modeloHabitacion.findByIdAndUpdate(id,datos)
        }
        async registrar(datos){
            // verificamos que los datos cumplan con el modelo
            let habitacionNueva=new modeloHabitacion(datos)
            return await habitacionNueva.save()
        }
        async eliminar(id){
            return await modeloHabitacion.deleteOne(id)
        }        

}