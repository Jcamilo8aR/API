//ESPACIO PARA DEFINIR LAS RUTAS O ENDPOINTS ESPECIFICOS DE SU API
// todas deberian ir en un solo archivo mientras sean del mismo api
import express from 'express';


// IMPORTO LOS CONTROLADORES
import { ControladorHabitacion} from '../controllers/ControladorHabitacion.js';
import { ControladorReservas} from '../controllers/ControladorReservas.js';


let controladorHabitacion=new ControladorHabitacion()
let controladorReservas=new ControladorReservas()


export let rutasAPI=express.Router(); //nos permite cambiar entre rutas


// ACA PONE SUS ENDPOINTS
//añaddir
rutasAPI.post('/api/habitaciones',controladorHabitacion.registrar)
//buscar general
rutasAPI.get('/api/habitaciones',controladorHabitacion.buscarTodas)
//buscar por ID
rutasAPI.get('/api/habitacion/:id',controladorHabitacion.buscarID) //url dinamica
//modificar
rutasAPI.put('/api/habitaciones/:id',controladorHabitacion.modificar)
//eliminar
rutasAPI.delete('/api/habitaciones/:id',controladorHabitacion.eliminar)


//RESERVAS
//añadir
rutasAPI.post('/api/reservas',controladorReservas.registrar)
//buscar general
rutasAPI.get('/api/reservas',controladorReservas.buscarTodas)
//buscar por ID
rutasAPI.get('/api/reserva:id',controladorReservas.buscarID)
//modificar
rutasAPI.put('/api/reservas:id',controladorReservas.modificar)
//eliminar
rutasAPI.delete('/api/reservas:id',controladorReservas.eliminar)


