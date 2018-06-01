const fs = require('fs');
var data = fs.readFileSync('m4/tt.txt')
console.log(data.toString())
fs.writeFileSync('m4/tt.txt',data.toString()+'黄林') // 没有返回值
fs.appendFileSync('m4/ttt.txt',12312)   //  在尾部插入

fs.readFile('m4/tt.txt', (err, data) => {
    if(err){
        throw err
    }
    fs.writeFile('m4/td.txt', data, (err) => {
        if(err){
            throw err
        }
        console.log('文件复制成功')
    })
})






