const express = require('express');
const router = express.Router();
const port = 3000;

let nameList = [
    "John",
    "Emma",
    "Michael",
    "Sophia",
    "David",
    "Olivia",
    "Daniel",
    "Ava",
    "Sarah",
    "Benjamin"
];

router.get('/', (req, res) => {
    res.status(200).json(nameList);
});

router.post('/:name', (req, res) => {
    const newName = req.params.name;
  
    if (!newName) {
      return res.status(400).json({ error: 'Invalid name parameter' });
    }
  
    nameList.push(newName);
    res.status(201).json(nameList);
  });

module.exports = router;