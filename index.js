import { Api } from "./Api.js";
import 'dotenv/config'
// console.log(process.env)

let servidor = new Api(); // CREANDO UN OBJETO DE LA CLASE API

// LEVANTAMOS EL SERIVDOR
servidor.levantarServidor()