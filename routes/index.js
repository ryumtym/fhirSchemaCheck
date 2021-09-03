/**
 * jsonオブジェクトとfhirSchemaを照らし合わせる
 * fhir公式が配布しているexampleJSONファイルを使用(hl7.fhir.r4.examples.tgz)
 * [localhost:3000] から確認可能
 */
const express = require('express');
const router = express.Router();
const app = express();
const {ajv} = require("../lib/ajvconnector");//インスタンス化したajvを呼び出す
const validate = ajv.getSchema("fhirSchema");
const ErrorChecker = require("../lib/errorcheck");


router.get('/', function(req, res){

  const exampleFile = require("../lib/example/Patient-f001");
  const valid = validate(exampleFile);
  const result = function(){
    if(!valid){
      const errChecker = new ErrorChecker();
      return errChecker.optimize(validate.errors);
    }else{
      return valid;
    }
  }


  res.header('Content-Type', 'application/json; charset=utf-8');
  res.send(result());//result
});
module.exports = router;