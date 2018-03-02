const express = require('express')
const router = express.Router();

// Home Page
router.get('/', (req, res, next) => {
  res.render('index', {title: 'ERM'})
});

module.exports = router;