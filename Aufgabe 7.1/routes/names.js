const express = require('express');
const session = require('express-session');
const router = express.Router();
const port = 3000;

router.use(session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: true
}));

router.get('/', (req, res) => {
    res.status(200).send(req.session.name);
  });

router.post('/:Newname', (req, res) => {
    const name = req.params.Newname;

    if (name) {
        req.session.name = name;
        res.status(201).send('Name stored in session successfully');
    } else {
        res.status(400).send('Invalid name');
    }
});

router.delete('/', (req, res) => {
    delete req.session.name;
    res.status(200).send('Name deleted in session successfully');
  });

module.exports = router;