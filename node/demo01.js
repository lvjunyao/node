let tt = 1
let bb = 2
console.log(1 + 2)
var html = "";
for(var i=1;i<=9;i++){
    for(var j=1;j<=i;j++){
        //ES6 新特性,在nodejs中不存在兼容性问题
        html += `${j}*${i}=${i*j}  `;
    }
    html += `\r\n`;
}
console.log(html);
//07_node.js


//输出参数值
console.log(__dirname); // 找到当前文件目录

console.log(__filename); // 找到当前文件

//E:\tao\nodejs\day02
//E:\tao\nodejs\day02\07_node.js

for(var i=2;i<=100;i++){
    for(var j=2;j<i;j++){
        if(i%j==0){
            break;
        }
    }
    //console.log(i+"--"+j);
    if(i==j){
        console.log(i);
    }
}
var uname = "james";
var age =  19;
function show(){
    console.log('显示名称' + uname);
}
module.exports.uname =  uname;
module.exports.show = show;
