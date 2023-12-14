const express = require('express');

var fs = require('fs');
var jpeg = require('jpeg-js');
const app = express();
const port = 3000

// View engine setup
app.set('view engine', 'ejs');

// Get Output
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Get Current Date
app.get('/now', (req, res) => {
    res.send(new Date);
})

// Get Redirect
app.get('/zli', (req, res) => {
    res.redirect('https://www.zli.ch/');
})

// Get Random Name
app.get('/name', (req, res) => {
    let name = ['Luisa Burch',
        'Madison Curry',
        'Kayleigh Salazar',
        'Julia Larson',
        'Kadie Archer',
        'Ellie Downs',
        'Jesse Mcclain',
        'Phoenix Gardner',
        'Greta Hartley',
        'Elias England',
        'Beau Raymond',
        'Rafael Patton',
        'Yasmin Levy',
        'Khadijah Brooks',
        'Josh Stone',
        'Orlando Alexander',
        'Lilli Black',
        'Wyatt Camacho',
        'Haaris Holden',
        'Saba Moreno'];

    let num = Math.round(Math.random() * 10);
    let output = name[num];
    res.send(output);
})

// Get HMLT Page
app.get('/html', function (req, res) {

    // Rendering home.ejs page
    res.render('home');
})

// Get Image
app.get('/image', function (req, res) {
    res.sendFile('/workspaces/M295/Aufgabe 3.3/views/CowboyBeebop.jpg');
})

// Listen to Port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})