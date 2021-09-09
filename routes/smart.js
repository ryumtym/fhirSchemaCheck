/**
 * jsonオブジェクトとfhirSchemaを照らし合わせる
 * fhir公式が配布しているexampleJSONファイルを使用(hl7.fhir.r4.examples.tgz)
 * [localhost:3000] から確認可能
 */
 const express = require('express');
 const router = express.Router();
 const app = express();
 const fhirClient = require("fhirclient");
 
 router.get('/', function(req, res){

    async function callAPI() {
        const client = fhirClient(req, res).client({
            serverUrl: "http://localhost:3000/4_0_0"
        });
    
        const a = await client.request("/Patient/hogehoge1234");   
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.send(a);//result   
    }

callAPI()


 });
 module.exports = router;