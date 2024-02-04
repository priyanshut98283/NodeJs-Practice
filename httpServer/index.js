/* 
The http.createServer() method includes request and response parameters which is supplied by Node.js

The request object can be used to get information about the current http request
e.g. url,request header and data

The response object can be used to send a response for a client http request

If the response from the HTTP server is supposed t be displayed as html,
we should include an http header with the current content type...

*/

const fs = require('fs');
const http=require('http');
const server=http.createServer((req,res)=>{
    //reading and showing data synchronously...
    // const data=fs.readFile(`${__dirname}/userAPI/userapi.json`,'utf-8');
    // const objData=JSON.parse(data);

    if(req.url=='/'){
    // res.write('We can write anything here!')
    res.end('Hello from backend!'); //-> Mandatory to send responses to client browser
    }
    else if(req.url=='/home'){
        res.end('Hello from Home page!');
    }
    else if(req.url=='/about'){
        res.end('Hello from About page!');
    }
    else if(req.url=='/docs'){
        res.end('Hello from Docs page!');
    }
    // Retriving data and showing on page request...API->
    else if(req.url=='/userapi'){
        res.writeHead(200,{"Content-type":"application/json"}); 
        fs.readFile(`${__dirname}/userAPI/userapi.json`,'utf-8',(err,data)=>{
            console.log('Data retrived...');
            // res.end(data);
            const objData=JSON.parse(data);
            res.end(objData[2].name);
            // If we want this data should be retrieved only once if it is not changing...
            // use fileSync method,see at top...and directly use res.end(objData[2].name); here
        })
        // res.end('Hello from API page!');
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"}); 
        //writehead-> This will show error message in console and Network tab request in developer tool...
        res.end('<h1>404 error Page Not Found!</h1>');

        // Content-type:text/html will show about page that is html in developer tool Response
        //  page Header section which is inside network tab...
    }
    console.log(req.url); // This will show requested url in browser...
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to port 8000');
});