/**
 * hapifhirのapi叩く
 * [localhost:3000/hapifhir]　から確認可能
 */
const express = require('express');
const router = express.Router();
const {ajv} = require("../lib/ajvconnector");//ajv呼ぶ
const validate = ajv.getSchema("fhirSchema");
const Axios = require("../lib/axios");//axios呼ぶ
const ErrorChecker = require("../lib/errorcheck");

router.get('/', function(req, res){
    const axios = new Axios();
    async function callAPI() {
      res.send(await axios.get("https://hapi.fhir.org/baseR4/Observation/1174688/"));
    }
    callAPI();
});
module.exports = router;

