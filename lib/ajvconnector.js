/**
* ajvインスタンス化
* https://ajv.js.org/guide/managing-schemas.html
*/
const Ajv = require("ajv");
const fhirSchema = require("../lib/schema/fhir.schema.json");
const ajv = exports.ajv = new Ajv({strict:false});
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));
ajv.addSchema(fhirSchema, "fhirSchema");

// const Ajv = require('ajv');
// const ajv = new Ajv({strict:false});
// ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));
// const fhir_schema = require("../fhir.schema.json")
// const observation_example = require("../Observation-f002.json")
// const validate = ajv.compile(fhir_schema)//https://ajv.js.org/guide/managing-schemas.html