const express = require('express');
const {UserModel , TodoModel} = require('./db'); 
const jwt = require('jsonwebtoken');
const mongoose  = require('mongoose');
mongoose.connect("mongodb+srv://23bcs037:2PNRnxkGdUPdjv4r@cluster0.q5kwrtg.mongodb.net/todo-app-hith");



const app = express();
app.use(express.json());

const JWT_SECRET ="Ilovekara";


app.post('/signup' , async function (req , res){ 
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name; 

    if(!email || !password || !name){
        res.status(400).json({
            message : 'Please provide all the fields'
        })
        return;
    }


    await UserModel.create({
        email: email,
        password : password,
        name : name
    });

    res.json({
        message : 'User created successfully'
    })
});

app.post('/signin' , async function(req , res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email,
        password
    }); 

    console.log(user); 
    
    if(user){
        const token = jwt.sign({
            id : user._id
        }, JWT_SECRET);
        res.json({
            token : token,
            message : 'User signed in successfully'
        })
        
    }else {
        res.status(401 ).json({
            message : 'Invalid credentials'
        })
    }

});


// need authentication for below routes

function auth ( req, res, next){
    const token = req.headers.token;
    const decodeddata = jwt.verify(token , JWT_SECRET);

    if(decodeddata){
        req.userId = decodeddata.id;
        next();
    }else {
        res.status(403).json({
            message : 'Invalid token'
        })
    }
}
app.post('/todo' ,auth, async function(req , res){
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;
    // if(!title || !done){
    //     res.status(400).json({
    //         message : 'Please provide all the fields'
    //     })
    //     return;
    // }

    await TodoModel.create({
        title : title,
        done : done,
        userId : userId
    })

    res.json({
        message : 'Todo created successfully'
    }) 
});
  
app.get('/todos' ,auth, async function(req , res){
    const userId = req.userId;
    const todos = await TodoModel.find({userId : userId});
    res.json({message : 'Get all todos' , todos : todos});
});

app.listen(3000);
