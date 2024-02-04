const os=require('os');
console.log(os.arch());
const freememory=os.freemem;
// it is in bytes -> converting it to gb -> 1kb=1024 bytes and 1 mb=1024 kb and 1gb=1024 mb
console.log(`${freememory/1024/1024/1024}`);

// Total memory
const totalmemory=os.totalmem();
// it is in bytes -> converting it to gb -> 1kb=1024 bytes and 1 mb=1024 kb and 1gb=1024 mb
console.log(`${totalmemory/1024/1024/1024}`);

console.log(os.hostname());
console.log(os.userInfo());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

