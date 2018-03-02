const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({text: "test api"})
})

module.exports = router;