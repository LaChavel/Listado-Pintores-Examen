//Importamos las dependencias.
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

//Creamos una constante para el valor del puerto.
const PUERTO = process.env.PORT || 3000;

//Emplear las rutas.
let pintoresRouter = require('./routes/pintor');

//Sitio web y HBS.
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

//Vamos a decirle a Express la ruta a emplear.
app.use('/', pintoresRouter);

/* La conexión con MongoDB */
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://Proyecto:proyecto_210418@gutierrezvanessa-x0yds.mongodb.net/curso?retryWrites=true&w=majority'
mongoose.connect(cadena, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Conexión establecida =oD');
    })
    .catch(err=> console.log(err));

/* Arrancar el servidor web */
app.listen(PUERTO, ()=>{
    console.log('Escuchando el puerto...');
});