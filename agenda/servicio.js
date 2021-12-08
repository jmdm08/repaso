const modeloAgenda = require('./modelo');

function buscarPorNombre(nombre){
    /*
        OPERACIONES LÓGICA O ARITMÉTICAS PARA TRANSFORMAR LOS DATOS
    */
    /*
        CONECTARNOS A UNA BASE DE DATOS...
    */
    let resultado = modeloAgenda.buscarUnoPorNombre(nombre);
    return resultado;
}

/*
    {
        "buscarPorNombre" : function buscarPorNombre(nombre){}
    }
*/
module.exports.buscarPorNombre = buscarPorNombre;