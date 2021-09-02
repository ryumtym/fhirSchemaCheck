const express = require('express');
const router = express.Router();
const app = express();


router.post('/', function(req, res, next){



  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(result);
});
module.exports = router;