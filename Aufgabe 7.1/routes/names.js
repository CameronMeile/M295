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
    res.status(200).send(res.session.name)
});

router.get('/:Newname', (req, res) => {
    const name = req.params.Newname;

    if (name) {
        req.session.name = name;
        res.status(201).send('Name stored in session successfully');
    } else {
        res.status(400).send('Invalid name');
    }
});

module.exports = router;