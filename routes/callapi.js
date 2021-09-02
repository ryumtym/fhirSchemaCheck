const express = require('express');
const router = express.Router();
const {ajv} = require("../lib/ajvconnector");//ajv呼ぶ
const validate = ajv.getSchema("fhirSchema");
const Axios = require("../lib/axios");//axios呼ぶ
const ErrorChecker = require("../lib/errorcheck");

router.get('/', function(req, res){
    const axios = new Axios("GET",'https://hapi.fhir.org/baseR4/Observation/1174688/');
    async function callAPI() {
      res.send(await axios.req());//localhost:3000/callapi
    }
    callAPI();
});
module.exports = router;

