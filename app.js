const express = require('express');
const path = require('path');
const app = express();

// Configura EJS como el motor de plantillas
app.set('view engine', 'ejs');

// Configura la carpeta de vistas
app.set('views', path.join(__dirname, 'views'));

// Configura rutas para los archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para renderizar index.ejs
app.get('/', (req, res) => {
    res.render('index'); // Renderiza el archivo index.ejs
});

// Inicia el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
