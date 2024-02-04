/* 
Streams are objects that let you read data from a source and write data to a destination in 
continuous fashion. In nodejs , there are four types of streams->
Streaming means listening to music and watching videos in real time, instead of downloading 
a file to your computer...
Readable- Stream which is used for read operation
Writable- Stream which is used for write operation
Duplex-   Stream which can be used for both read and write operation
Transform- A type of duplex stream where the output is computed based on input

Each type of stream is an EventEmitter instance and throws several events at different instances of 
time.E.g.->
data- This event is fired when there is data available to read
end - This event is fired when there is no more data to read
error- This event is fired when there is any error in receiving or writing data
finish- This event is fired when all the data has been flushed to underlying system
*/

const fs=require('fs');
const http=require('http');
const server=http.createServer();


// Old way of fetching data all at once 
// server.on('request',(req,res)=>{
//     fs.readFile('input.txt',(err,data)=>{
//         if(err) return console.error(err);
//         res.end(data.toString());
//     })
// })

// Streaming data in real time

// server.on('request',(req,res)=>{
//     const rstream=fs.createReadStream('input.txt');

//     rstream.on('data',(chunkData)=>{
//         res.write(chunkData);
//     })

//     rstream.on('end',()=>{
//         res.end();
//     })

//     rstream.on('error',(err)=>{
//         console.log(err);
//         res.end('File not Found!');
//     })
// })

// Above code can be done in single line using stream.pipe(destination,[options]) -> options can 
// be end , the method used to take a readbale stream and connect it to a writable stream

server.on('request',(req,res)=>{
    const rstream=fs.createReadStream('input.txt');

    rstream.pipe(res);
})

server.listen(8000,'127.0.0.1');