var express = require("express");
var https = require('https');
var bodyParser=require("body-parser"); 
var fs=require("fs");
var app = express(); 
var path = require("path");
//使用mysql
var getmysql = require("./mysql.js");


app.use(bodyParser.urlencoded({ extended: false }));  
var hostName = '0.0.0.0';
var port = 8081;



//证书
let key_PATH = path.resolve("keys", 'fh.key');
let pem_PATH = path.resolve("keys",'fh.pem')


var options = {
    key:fs.readFileSync(key_PATH),
    cert:fs.readFileSync(pem_PATH)
}

//连接模板
var httpsServer = https.createServer(options,app);

app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
});

app.get("/get",function(req,res){
   // console.log("请求url：",req.path)
   // console.log("请求参数：",req.query.mode)    
    var info = req.query.mode.split(",");
    getmysql.getinfo(info,res);
})

app.post("/post",function(req,res){
    //console.log("请求参数：",req.body);
    //var result = {code:200,msg:"post请求成功"};
    var result = getmysql("get0");
    res.send(result);
});


/* app.listen(port,hostName,function(){
   console.log(`服务器运行在http://${hostName}:${port}`);
});
 */
//监听
httpsServer.listen(port, hostName, function() {
    console.log('HTTPS Server is running on: https://%s:%s',hostName,port);
});

