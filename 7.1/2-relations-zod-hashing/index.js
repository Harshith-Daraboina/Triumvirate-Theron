const express = require('express');
const {UserModel , TodoModel} = require('./db'); 
const jwt = require('jsonwebtoken');
const mongoose  = require('mongoose');
const bcrypt  = require('bcrypt');
const { z } =require('zod');


mongoose.connect("mongodb+srv://23bcs037:2PNRnxkGdUPdjv4r@cluster0.q5kwrtg.mongodb.net/todo-app-hith");



const app = express();
app.use(express.json());

const JWT_SECRET ="Ilovekara";
const saltRounds = 5;

app.post('/signup' , async function (req , res){ 

    // validation with zod we need a zod object
    const requiredbody = z.object({
        email : z.string().email().min(3).max(50),
        password : z.string().min(6).max(50),
        name : z.string().min(3)
    })

    // const parseddata = requiredbody.parse(req.body);
    const parseddata = requiredbody.safeParse(req.body);

    if(!parseddata.success){
        res.status(400).json({
            message : 'Invalid data',
            errors : parseddata.error.errors
        })
        return;
    }


    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name; 

    if(!email || !password || !name){
        res.status(400).json({
            message : 'Please provide all the fields'
        })
        return;
    }

// hashing 
    const hashedpassword = await bcrypt.hash(password , saltRounds);
    console.log(hashedpassword);



    await UserModel.create({
        email: email,
        password : hashedpassword,
        name : name
    });

    res.json({
        message : 'User created successfully',
        hashedpassword : hashedpassword
    })
});




app.post('/signin' , async function(req , res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email
    }); 

    if(!user){
        res.status(401).json({
            message : 'User does not exist!'
        })
        return;
    }
    const passwordbatch = await bcrypt.compare(password , user.password)
    
    
    
    if(passwordbatch){
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
