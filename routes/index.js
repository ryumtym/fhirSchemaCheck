const express = require('express');
const router = express.Router();
const app = express();
router.get('/', function(req, res, next){
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send("HELLO WORLD!");
});
module.exports = router;