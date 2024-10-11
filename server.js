const express = require('express');
const path = require('path');
const app = express();

const expressLayouts = require('express-ejs-layouts');
// Configura EJS como el motor de plantillas
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set("layout", "./layouts/layout")

// Configura la carpeta de vistas
app.set('views', path.join(__dirname, 'views'));

// Configura rutas para los archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para renderizar index.ejs
app.get('/', function(req, res) {
    res.render('index', {tittle: "Home"}); // Renderiza el archivo index.ejs
});

// Inicia el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
