
//原生模块:url

const url = require("url");
var str = "https://qd:123@www.jd.com:443";
str += "/index/ad?pno=3&uname=tom#top";

var obj = url.parse(str);
console.log(obj);

//true:指定使用querystring.parse()
//对url中查询字符串进行进一步解析，得到对象

var obj = url.parse(str,true);
console.log(obj.query.pno);
console.log(obj.query.uname);
//query: { pno: '3', uname: 'tom' },