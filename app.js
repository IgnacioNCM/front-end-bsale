const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static('scripts'));
app.use('/', express.static(__dirname + '/scripts'));

app.use(express.static('styles'));
app.use('/', express.static(__dirname + '/styles'));

app.use(express.static('assets'));
app.use('/', express.static(__dirname + '/assets'));

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/layouts/index.html'));
});

router.get('/productos', function (req, res) {
    res.sendFile(path.join(__dirname + '/productos.html'));
});

router.get('/categorias', function (req, res) {
    res.sendFile(path.join(__dirname + '/categorias.html'));
});

router.get('/buscar', function (req, res) {
    res.sendFile(path.join(__dirname + '/buscar.html'));
});

//add the router
app.use('/', router);
app.listen(3000);

console.log('Running at Port 3000');