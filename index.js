console.clear();
console.log("Hello!");
// Console is not browser but node js function...
// Use node in terminal to enter repl mode...
/* 
Double click tab button to open nodejs functions and write function name to see detailed view
.editor -> editor mode
underscore(_) -> last result
multiline automatic like in do while loop
*/
const fs=require('fs');
// Sync functions->
fs.writeFileSync('read.txt','welcome here p.t.!!');
fs.appendFileSync('read.txt','welcome here p.t.!!!');
// This will store buffer data...
const buffer=fs.readFileSync('read.txt');
// console.log(buffer);
res=buffer.toString();
console.log(res);


