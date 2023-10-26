import {modeloReserva} from'../models/modeloReserva.js' 
export class ServicioReserva{

    constructor(){}
    
    async buscarTodas(){
        let reservas=await modeloHabitacion.find()
    }
    async buscarID(id){
        let reserva=await modeloHabitacion.findById(id)
        return reserva()
    }
    async modificar(id,datos){
        return await modeloReserva.findByIdAndUpdate(id,datos)
    }
    async registrar(datos){
        // verificamos que los datos cumplan con el modelo
        let reservaNueva=new modeloReserva(datos)
        return await reservaNueva.save()
    }
    eliminar(id){} 

}