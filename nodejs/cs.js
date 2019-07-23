const https = require('https');
const fs = require('fs');
var path = require("path");

//证书
let key_PATH = path.resolve("nodejs/keys", 'fh.key');
let pem_PATH = path.resolve("nodejs/keys",'fh.pem')


const options = {
    key:fs.readFileSync(key_PATH),
    cert:fs.readFileSync(pem_PATH)
}
https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);