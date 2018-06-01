var qs = require('querystring');
var str = "uname=tom&age=19&pno=3";
//把客户端传node.js 服务器查询字符串解析容易使用js对象
var obj = qs.parse(str);
console.log(obj);

//{ uname: 'tom', age: '19', pno: '3' }