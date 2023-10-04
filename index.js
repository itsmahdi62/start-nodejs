const fs = require('fs')
const http = require('http');
const urL= require('url');


////////////      files
//blocking  , synchronous way
// const textIn = fs.readFileSync('./text/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know : ${textIn}.\nCreated on ${Date.now()}`;

// fs.writeFileSync('./text/output.txt' , textOut);

// console.log("File writed");

//non-blocking  , asynchronous way

// fs.readFile('./text/start.txt' , 'utf-8', (err , data1) =>{
//     fs.readFile(`./text/${data1}.txt` , 'utf-8', (err , data2) =>{
//         console.log(data2)
//         fs.readFile('./text/append.txt' , 'utf-8', (err , data3) =>{
//             console.log(data3)

//             fs.writeFile('./text/final.txt', `${data2}/n${data3}` , 'utf-8' , err  =>{
//                 console.log('Your file has been written 😂')
//             })
//         })
//     })
// })


//////////////////////////////
// Server
//////////////

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, "utf-8");
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, "utf-8");
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, "utf-8");

const server = http.createServer((req , res) =>{
    const pathName = req.url;

    //overview page
    if(pathName === '/'  || pathName === '/overview'){
        res.writeHead(200 , {'Content-type' : 'text/html'});
        res.end(tempOverview)
    //product page
    }else if (pathName === "/product"){
        res.end("This is the Product")


    ._construct. API
    }else if (pathName === '/api'){
        res.writeHead(200 , {'Content-type' : 'application/json'});
        res.end(data)
    
        // NOT found
    }else {
        res.writeHead(404 , {
            'Content-type': 'text/html',
            'my-own-header': 'Hello-world',
        });
        res.end('<h1>Page not found</h1>');
    }
})

server.listen(8000 , '127.0.0.1' , () => {
    console.log("Listening to requets")
});

