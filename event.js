// const eventEmitter = require("events");
// const { EventEmitter } = require("stream");

const http = require('http')

// class Sales extends EventEmitter{
//     constructor(){
//         super();
//     }
// }

// const myEmitter = new Sales();

// myEmitter.on('newSale' , () => {
//     console.log(`There was a new sale! `);
// })

// myEmitter.on('newSale' , stock => {
//     console.log(`Costomer name  : Jonas ${stock}`);
// })

// myEmitter.emit('newSale' , "dd");
/////////////////////////

const server = http.createServer();

server.on('request' , (req , res ) => {
    console.log('Request received!');
    console.log(req.url)
    res.end('Request received!');
})

server.on('request' , (req , res ) => {
    console.log('another Request !');
})
server.on('close' , () => {
    console.log('server closed');
    
})

server.listen(8000 , '127.0.0.1' , () =>{
    console.log("Wating for request");
})