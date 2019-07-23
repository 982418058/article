var mysql = require("mysql");
var pool  = mysql.createPool({
    host:'120.78.151.78',
    user:"fh",
    password:"Fuhao.888",
    database:"Article"
});

exports.getinfo = function(storage,res){
        //mysql CALL指令填充
    var info = storage[0]+"(";
    for(var a=1;a< storage.length;a++){
        info+="'"+storage[a]+"'"
        info+= a!=storage.length-1?",":''
    }
        info+=")";

/*     connection.connect();
        //运行mysql指令
 */
    pool.getConnection(function(err,conn){    
        if(err){    
            callback(err,null,null);    
        }else{    
            conn.query("CALL "+info,function(error,results,fields){    
                //释放连接    
                conn.release();    
                //事件驱动回调    
                if(error) throw error;
                //console.log('The so'+ results[0][0]);
                if(typeof(results[0]) == "object"){
                    res.send(results[0]);
                }
            });    
        }    
    });    

/*     connection.query("CALL "+info,function(error, results, fields){
        if(error) throw error;
        //console.log('The so'+ results[0][0]);
        if(typeof(results[0]) == "object"){
            res.send(results[0]);
        }
    }) */
}