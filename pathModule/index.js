const path=require("path");
console.log(path.dirname("D:/FullStackDevelopment/NodeJs-Projects/Node-demo/pathModule/index.js"));
console.log(path.extname("D:/FullStackDevelopment/NodeJs-Projects/Node-demo/pathModule/index.js"));
console.log(path.basename("D:/FullStackDevelopment/NodeJs-Projects/Node-demo/pathModule/index.js"));

// Parse returns properties of path...
console.log(path.parse("D:/FullStackDevelopment/NodeJs-Projects/Node-demo/pathModule/index.js"));

// Ny storing values...
// const mypath=path.parse("D:/FullStackDevelopment/NodeJs-Projects/Node-demo/pathModule/index.js");
// console.log(mypath.name);