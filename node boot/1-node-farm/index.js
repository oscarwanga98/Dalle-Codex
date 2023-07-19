const fs= require('fs');

// Blocking synchronous way
// const textIn=fs.readFileSync('./txt/input.txt','utf-8')
// console.log(textIn)

// const textOut= `This is what we know about avocado: ${textIn}.\nCreated on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt',textOut)
// console.log('File Writen')

//Non-blocking 

fs.readFile('./txt/start.txt','utf-8',(error,data1)=>{
    fs.readFile(`./txt/${data1}.txt`,'utf-8',(error,data2)=>{
        console.log(data2)
     })
   
})
console.log("Will read file")