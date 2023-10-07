const eventEmitter = require("events");
const { EventEmitter } = require("stream");

const http = require('http')

class Sales extends EventEmitter{
    constructor(){
        super();
    }
}

const myEmitter = new Sales();

myEmitter.on('newSale' , () => {
    console.log(`There was a new sale! `);
})

myEmitter.on('newSale' , stock => {
    console.log(`Costomer name  : Jonas ${stock}`);
})

myEmitter.emit('newSale' , "dd");
/////////////////////////

const server = http.createServer();

server.on('request' , (req , res ) => {
    
})