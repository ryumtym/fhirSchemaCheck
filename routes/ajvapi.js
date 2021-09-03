// https://qiita.com/zaburo/items/69726cc42ef774990279
// https://github.com/ajv-validator/ajv/issues/1295
// https://dev.classmethod.jp/articles/typescript-node-js-validation/
//https://noumenon-th.net/programming/2018/12/22/express-generator01/
//(https://stackoverflow.com/questions/51612803/not-able-to-understand-ajv-validation-output-for-a-fhir-resources)
/**
 * ajvをapiとして扱う(node-redと合わせて使用)
 */
const express = require('express');
const router = express.Router();
const app = express();
app.use( express.json() );
app.use( express.urlencoded({extended:true}));
const {ajv} = require("../lib/ajvconnector");//インスタンス化したajvを呼び出す
const validate = ajv.getSchema("fhirSchema");
const ErrorChecker = require("../lib/errorcheck");


router.post('/', function(req, res){
  
  const valid = validate(req.body);//JSONを検証する

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

