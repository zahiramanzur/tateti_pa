const express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const path = require('path');
const router = express.Router();
var fs = require("fs");

router.get('/tateti', function(req, res) {

    if (req.ganadores) {
        console.log("hola")
    }
    res.sendFile(path.join(__dirname + '/index.html'));



    //  console.log("GET" + prueba);

});

router.get('/juego.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/juego.js'));

});

router.get('/ganadores.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/ganadores.js'));

});

router.get('/ganadores.JSON', function(req, res) {
    res.sendFile(path.join(__dirname + '/ganadores.js'));

});

router.post('/tateti/1', function(req, res) {

    console.log("funciono1");
    var nombre1 = req.body.user1;
    console.log(nombre1)
    let points = JSON.parse(fs.readFileSync('ganadores.JSON', 'utf8'));

    points.push({
        "nombre": nombre1,
        "marca": "X",
        "color": "red",
        "id": 1
    })

    fs.writeFileSync('ganadores.JSON', JSON.stringify(points));
    res.redirect('/tateti');
    res.end(JSON.stringify(points));



})

router.post('/tateti/2', function(req, res) {

    console.log("funciono2");
    var nombre2 = req.body.user2;
    console.log(nombre2)

    let points = JSON.parse(fs.readFileSync('ganadores.JSON', 'utf8'));

    points.push({
        "nombre": nombre2,
        "marca": "O",
        "color": "green",
        "id": 1
    })

    fs.writeFileSync('ganadores.JSON', JSON.stringify(points));
    res.redirect('/tateti');
    res.end(JSON.stringify(points));
})

router.get('/ganadores.html', function(req, res) {

    res.sendFile(path.join(__dirname + '/ganadores.html'));

});

app.use('/', router);



app.listen(process.env.port || 8888);