const express = require('express');
const rutasAgenda = express.Router();
const servicioAgenda = require('./servicio');

/*
    ENTREGAR UNA FUNCIÓN POR CADA MÉTODO HTTP -> GET, POST, PUT, DELETE.
        -> 1. LA RUTA.
        -> 2. UNA FUNCIÓN PARA PROCESAR LA PETICIÓN Y LA RESPUESTA.
            -> peticion
            -> respuesta
            -> next -> Indicar pasar a la siguiente función de procesamiento.
        
        .get(ruta, funcionesProcesamiento)
        .post(ruta, funcionesProcesamiento)
        .put(ruta, funcionesProcesamiento)
        .delete(ruta, funcionesProcesamiento)

        funcionesProcesamiento -> Middleware.
        
*/

/*
    1. /consultarNombre -> GET -> nombreABuscar.
*/
/**
 * CONSULTAR POR NOMBRE
 *  -> DATOS POR QUERYSTRING
 */
rutasAgenda.get("/consultarNombre", function(peticion, respuesta){
    let nombre = peticion.query.nombre;
    let resultado = servicioAgenda.buscarPorNombre(nombre);
    respuesta.send({
        "mensaje" : "Resultados de la búsqueda",
        "resultados" : resultado
    });
});

module.exports = rutasAgenda;