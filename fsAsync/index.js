const fs=require('fs');
fs.writeFile('read.txt',"Today is Monday!!!",(err)=>{
    console.log("File is created!");
    console.log(err);
});

// In async , we pass a function here as an argument which is a Callback function->(means call be back)
// It is used to catch errors or tell what to do when task gets completed...(even it it's nothing)

fs.appendFile("read.txt","Weather is so cool!!",()=>{
    console.log("Data added!");
})

fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log(data);
})

// The main difference in async and sync is that if we fetch/read data from a file,it will not run another 
// commands until data is fetched,it can be problematic if file data is so long ...but in async if data
// takes times to load ,other statements in queue will start executing...

// ex-> 
/* 
fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log(data);    -> shown later in async but first in sync...
})
console.log("Outer data") -> this line will run first in aysnc but not in sync...
*/

// Creating directory...
fs.mkdir('P.T.',()=>{
    console.log("Directory created!");
});

// Write data
fs.writeFile('P.T./bio.txt','My name is P.T. I am a coool person.',()=>{
    console.log("Data written!");
});

// Add data at last
fs.appendFile('P.T./bio.txt','I am a software engineer.',()=>{
    console.log("Data Appended!");
});

// read data

fs.readFile('P.T./bio.txt','utf-8',(err,data)=>{
    console.log("Data Fetched Successfully!");
    console.log((data));
});

// Rename data

// fs.rename("P.T./bio.txt","P.T./mybio.txt",(err)=>{
//     console.log("Renamed!");
// });

// Delete file

// fs.unlink("P.T./mybio.txt",(err,data)=>{
//     console.log("File deleted!");
// });

// Delete directory

// fs.rmdir("P.T.",(err,data)=>{
//     console.log("Deleted directory!");
// });