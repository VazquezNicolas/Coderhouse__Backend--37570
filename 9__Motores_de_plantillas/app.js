const express = require("express");
const handlebars = require("express-handlebars");

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.get("/", (req, res) => {
    res.render('home')
});
app.get("/saludar/:nombre", (req, res) => {
    const nombre = req.params.nombre;
    res.render('saludar', { nombre });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
