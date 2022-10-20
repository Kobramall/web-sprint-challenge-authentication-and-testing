// do not make changes to this file
const router = require('express').Router();
const jokes = require('./jokes-data');
const  { restricted }  = require('../middleware/restricted')

router.get('/', restricted, (req, res, next) => {
  res.status(200).json(jokes);
  next()
});

module.exports = router;
