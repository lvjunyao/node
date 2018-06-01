// 自定义web服务器
// 加载模块
const http = require('http');
const fs = require('fs');
// 创建服务器
var server = http.createServer()
// 绑定监听端口
server.listen(3000)
server.on('request', (req, res) => {
    // console.log(req.url)
    //5:事件处理函数有二个参数  req res

    //6:服务器必须响应消息 欢迎html
    // var html = "<h1>欢迎来到我的服务器 :)</h1>";
    // res.end(html); // 发送数据回页面显示
    let url = req.url
    console.log(url+1)
    if(url === '/index.html'){
        res.setHeader("Content-Type", "text/html;charset=utf-8");
        fs.readFile('demo01.html', (err, data) => {
            if(err){
                throw err
            }
            var html = data.toString()
            res.write(html)
            res.end()
        })
    }
    else{
        res.setHeader("Content-Type", "text/css;charset=utf-8");
        fs.readFile('demo01.css', (err, data) => {
            if(err){
                throw err
            }
            var html = data.toString()
            res.write(html)
            res.end()
        })
    }

} )