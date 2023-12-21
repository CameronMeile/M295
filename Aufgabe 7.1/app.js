// npm install express-session

const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Aufgabe 7.1 | Session')
});

const nameRouter = require('./routes/names');
app.use('/name', nameRouter);

app.listen(port, () => {
    console.log('Server is running on port 3000');
  });