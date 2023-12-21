const express = require('express');
const router = express.Router();
const port = 3000;
const session = require('express-session');

router.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: true
}));

router.use(auth);

let lends = [];

// Lends
router.get('/', (req, res) => {
  res.send(lends);
});

router.get('/:id', (req, res) => {
  res.send(lends.find((lend) => lend.id === req.params.id))
});

router.post('/', (req, res) => {
  const newLend = req.body;
  newLend['borrowed_at'] = new Date().toISOString();
  lends = [...lends, req.body];
  res.status(201).send(lends);
});

router.delete('/:id', (req, res) => {
  const returnedLend = lends.find((lend) => lend.id === req.params.id)
  returnedLend['returned_at'] = new Date().toISOString();
  res.send(lends);
});

function auth(req, res, next) {
  // Check if email is set in session
  if (req.session.email) {
    console.log(req.session.email);
    next();
    return;
  }
  return response.status(401).json({ error: "Not logged in" })
}

module.exports = router;