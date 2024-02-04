const fs=require('fs');

/* 
Json-> Javascript object notation
Format to store data like js objects...
*/

// Below is javascript object
const bioData={
    name:"P.T.",
    age: 21,
    profile:"Full-Stack Developer",
};

// This is json-> {"name":"P.T.","age":21,"profile":"Full-Stack Developer"}

console.log(bioData.profile);

// Converting object to json
const jsonData=JSON.stringify(bioData);
console.log(jsonData); // Output-> {"name":"P.T.","age":21,"profile":"Full-Stack Developer"}
// console.log(jsonData.profile); -> We can't use . here ,json has other methods for that,it is used in objects

// Coverting json to object
const objData=JSON.parse(jsonData);
console.log(objData);
// console.log(objData.name); -> Now, we can use . here 



// Now saving json data to another file which is json type...
// fs.writeFile('data.json',jsonData,(err)=>{
//     console.log('Done!');
// });

// Reading file now // API data request ...

fs.readFile('data.json','utf-8',(err,data)=>{
    const orgData=JSON.parse(data);
    console.log(data);
    console.log(orgData);
})