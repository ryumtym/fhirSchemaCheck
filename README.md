# fhir schema check on node
- Template repository for checking fhir schemas with ajv<br>
- Requires node.js(v12.19.0 or later) and node-red
- This can only be used on pages with no self-signed certificate issues(As of 2021/09/02)


# Usage
  1. Install axios in the node-red module `npm install axios --save`<br>
  2. Paste the contents of the `fhir-schema-check\app\node-red.txt` into node-red <br>
  3. `npm start` and run the node-red flow

