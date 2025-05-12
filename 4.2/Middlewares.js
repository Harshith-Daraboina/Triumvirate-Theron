const express = require ('express')
const app = express();

app.get("/user" , function ( req , res){
    res.json({
        name : "John Doe",
        url_path : "/user",        headers : req.headers,
        query : req.query,
        body : req.body,
        params : req.params,
        method : req.method,
        timestamp : new Date().toISOString()
    })
})

app.listen(3000);