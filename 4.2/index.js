// const fs = require('fs');

// fs.readFile( "a.txt" , "utf-8" , (err , data)=>{
//     console.log(data);
// });


const express =  require('express');
const port =5000
const app = express();

app.get('/' , function(req ,res){
    res.send("<b>Hello,World!</b>");
})
app.get('/asd' , function(req ,res){
    res.send("Hello,World! from asd endpoint");
})

app.listen(port)