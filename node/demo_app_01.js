// 引入需要模块
const http = require('http')
const mysql =  require('mysql')  // 引入mysql模块
const url = require('url')
const fs = require('fs')
// 创建服务器，并监听端口
let server = http.createServer()
server.listen(4000)
server.on('request', (req, res) => {
    // 创建数据库连接
    var conn = mysql.createConnection({
        host:"127.0.0.1",
        user:"root",
        password:"",
        database:"db",
        port:3306
    });
    // 解析url地址
    let urlobj = url.parse(req.url,true);
    console.log(urlobj)
    let path = urlobj.pathname;  // 获得触发接口
    console.log(path)
    res.setHeader('Content-Type', 'text/html;charset=utf-8')  // 设置响应头
    if('/index.html' === path){
            console.log(path)
            res.end('index');
    }else if(path === '/login'){
        var u = urlobj.query.email;
        var p = urlobj.query.password;
       console.log(u,p)
        var sql =  " SELECT id FROM user";
        sql += " WHERE email=? AND password=?"

        conn.query(sql,[u,p],(err,result)=>{
            if(err)throw err;
            var msg = "";
            if(result.length==0){
                msg = "用户密或密码有误";
            }else{
                msg = "登录成功";
            }
            res.end(msg);
            conn.end();
        });
    }

})