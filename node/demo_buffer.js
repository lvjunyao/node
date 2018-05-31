//#创建大小为512KB缓冲区,空
var buf1 = Buffer.alloc(512*1024);
console.log(buf1);
console.log(buf1.length);
//使用数组初始化缓冲区
var buf2 = Buffer.from([1,2,3]);
console.log(buf2);
console.log(buf2.length);
//使用字符串初始化缓冲区
var buf3 = Buffer.from("abc");
console.log(buf3);
//使用字符串初始化缓冲区
var buf3 = Buffer.from("abc");
console.log(buf3);

//使用汉字初始缓冲区
var buf4 = Buffer.from("一二三");
console.log(buf4);
console.log(buf4.length);
var str = buf4.toString();  //  如果缓冲区数据是字符串,才有用
console.log(str);//一二三