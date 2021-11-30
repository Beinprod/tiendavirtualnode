const express = require('express');
const path = require('path');

// Inicio Express
const app = express();

// Archivos Estaticos
app.use(express.static(path.join(__dirname, '../public')));


// Para capturar y configurar la informacion que viene por post -- Form->Obj Literal->Json
app.use(express.urlencoded({extended: false}))
app.use(express.json())


// Establecer vistas
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))


// Routing
const mainRouter = require('./routers/mainRouter')


app.use('/', mainRouter)


// Pagina no encontrada
app.use((req, res, next) => {
    res.status(404).render('notFound', { 
        page_tag: 'Dashboard - Página no encontrada',
        page_title: 'Dashboard - Tienda Virtual',
        page_name: 'dashboard'
    });
})

// Escuchando servidor en el puerto 3000
app.listen(3000, () => console.log("Levantando un servidor con Express en", "http://localhost:3000"));