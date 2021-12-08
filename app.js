/*
    1. Importar módulos requeridos. - OK
        -> express -> Crear Rutas/Iniciar API.
        -> morgan -> Logger
    2. Configuración de módulos. - OK.
    3. Inicialización de rutas. 
        -> http://localhost:3000/ruta(path)
           -> CREAR UN CONJUNTO DE RUTAS POR FUNCIONALIDAD, MÓDULO, ACCIÓN, REQUERIMIENTO.
              -> AGENDA.
                 -> controlador -> Rutas -> Pedazo de la URL después del primer /
                 -> servicio -> Encargado de procesar las peticiones.
                 -> modelo/persistencia/datos -> Encargar de las conexiones a la base de datos.  
    4. Procesar petición.
        1. COMO CAPTURAR LOS DATOS DE LA PETICIÓN.
            a. QueryString -> http://localhost:3000/consultarPersona?nombre=Jose&apellido=Dager
                -> peticion.query = {
                    "nombre" : "Jose",
                    "apellido" : "Dager"
                }
                peticion.query.nombre, peticion.query.apellido
            b. Parámetros -> Es pedazo de la URL que se va a convertir en una variable (:nombrePárametro)
                /consultarPersona/:nombre/:apellido
                -> http://localhost:3000/consultarPersona/Jose/Dager
                    -> peticion.params = {
                        "nombre" : "Jose",
                        "apellido" : "Dager"
                    }
            c. Cuerpo/Body -> Hace referencia al cuerpo de la petición -> POST, PUT, PATCH.
               -> http://localhost:3000/crearPersona
                  "{" "nombre":"Jose", "apellido": "Dager" "}"
                  
                  -> peticion.body = {
                      "nombre" : "Jose",
                      "apellido" : "Dager"
                  }
    5. Enviar respuesta.
        -> send() -> Crear una respuesta personalizada.
        -> json() -> Enviar un JSON
        -> sendFile() -> Envia un archivo en formato BLOB
        -> download() -> Inicia la descarga de un archivo
        -> status() -> Cambiar el código HTTP de la respuesta.
    6. Correr el servidor.
       -> .listen()
          -> 1. Puerto.
          -> 2. Función de Callback para validar el inicio correcto del API.
*/

const express = require('express');
const morgan = require('morgan');
const rutasAgenda = require('./agenda/controlador');

// INICIALIZAR EXPRESS
const app = express();
/*
    use -> Permite configurar módulos adicionales para express.
           Cargar rutas personalizadas.
*/
app.use(morgan('dev'));
app.use(express.json()); // -> CONVIERTE EN JSON QUERYSTRING, PARÁMETROS O CUERPO
app.use(express.urlencoded({extended:true})); // -> CONVIERTE EN JSON EL FORMATO FORMDATA.

// CARGAR RUTAS PERSONZALIDAS
/*
    .use("rutaDeAcceso", objetoRutas)
*/
app.use("/agenda", rutasAgenda);

app.listen(3900, function(){
    console.log("API EJECUTÁNDOSE...");  
});