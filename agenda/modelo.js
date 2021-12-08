function buscarUnoPorNombre(nombre){
    // CONEXIÓN Y CONSULTA A UNA BASE DE DATOS
    if(nombre === "Jose"){
        return {
            "nombre" : "Jose",
            "apellido" : "Dager",
            "edad" : 1,
            "identificacion" : 1001
        }
    }
    else{
        return {
            "mensaje" : "La persona solicitada no existe..."
        }
    }
}

module.exports.buscarUnoPorNombre = buscarUnoPorNombre;