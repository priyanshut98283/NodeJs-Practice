const fs=require('fs');

// All these functions are Sync not Async...

//Creating directory...
// fs.mkdirSync('P.T.');

//Write data
fs.writeFileSync('P.T./bio.txt','My name is P.T. I am a coool person.');

// Add data at last
fs.appendFileSync('P.T./bio.txt','I am a software engineer.');

//read data

const data=fs.readFileSync('P.T./bio.txt','utf-8');
console.log((data));

//Rename data

// fs.renameSync("P.T./bio.txt","P.T./mybio.txt");

//Delete file

// fs.unlinkSync("P.T./mybio.txt");

//Delete directory

// fs.rmdirSync("P.T.");