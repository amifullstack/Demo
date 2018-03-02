const express = require('express');
const router = express.Router();

const User = require('../../models/User');

router.get('/list', (req, res, next) => {
  User.find((err, user) => {
    if(err) {
      res.send(err.message);
    } 
      res.json(user);
  });
});

module.exports = router;