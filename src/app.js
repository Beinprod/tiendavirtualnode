const express = require('express');
const path = require('path');

// Inicio Express
const app = express();

// Archivos Estaticos
app.use(express.static(path.join(__dirname, '../public')));



// Escuchando servidor en el puerto 3000
app.listen(3000, () => console.log("Levantando un servidor con Express en", "http://localhost:3000"));