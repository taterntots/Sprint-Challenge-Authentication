const router = require('express').Router();
const bc = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');
const Users = require('../helpers/users-model.js');

router.post('/register', (req, res) => {
  let credentials = req.body;
  const hash = bc.hashSync(credentials.password, 8); //hashes the password
  credentials.password = hash;

  Users.add(credentials)
    .then(savedUser => {
      res.status(201).json(savedUser);
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
