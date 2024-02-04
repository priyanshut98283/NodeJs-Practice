const add=(a,b)=>{
    return a+b;
}

const sub=(a,b)=>{
    return a-b;
}

const name="P.T.";

module.exports={add,sub,name};


// For single functions->
// module.exports=add

// For multiple functions->
// module.exports.add=add;
// module.exports.sub=sub;
// and in another File, we need to require it->
// const fun=require("./operate");
// fun is an object containing both add and sub and can be accessed by . operator...

// If want no used directly add and sub,then write ->
// const {add,sub}=require("./operate");


//In this file we can export all functions like->
// module.exports={add,sub};