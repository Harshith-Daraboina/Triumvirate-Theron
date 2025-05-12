const express = require ('express')

const app = express();

const port = 3000
app.get("/sum" , function ( req , res){
    const a = req.query.a;
    const b = req.query.b;
     sum = a * b
    res.json({
        answer : sum
    })
})


app.listen(port);