const fs = require('fs')

//blocking  , synchronous way
// const textIn = fs.readFileSync('./text/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know : ${textIn}.\nCreated on ${Date.now()}`;

// fs.writeFileSync('./text/output.txt' , textOut);

// console.log("File writed");

//non-blocking  , asynchronous way

fs.readFile('./text/start.txt' , 'utf-8', (err , data1) =>{
    fs.readFile(`./text/${data1}.txt` , 'utf-8', (err , data2) =>{
        console.log(data2)
        fs.readFile('./text/append.txt' , 'utf-8', (err , data3) =>{
            console.log(data3)

            fs.writeFile('./text/final.txt', `${data2}/n${data3}` , 'utf-8' , err  =>{
                console.log('Your file has been written 😂')
            })
        })
    })
})


