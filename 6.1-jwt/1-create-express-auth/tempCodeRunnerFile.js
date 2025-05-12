const express = require('express');
const app = express();

const users= [];

function generateToken(){ 
    const options = [ 'a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z' , 'A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I' , 'J' , 'K' , 'L' , 'M' , 'N' , 'O' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 'Y' , 'Z' , '0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9'];
    let token ='';
    for(let i = 0 ; i < 32 ; i++){
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}


// console.log(generateToken());

app.use(express.json());
app.post( '/signup' , (req, res) => {
    const username =  req.body.username;
    const password =  req.body.password;

    if(username.length < 5 || password.length < 5){
        return res.json({message : "username or password is too short"});
    }
    if(users.find(user => user.username === username)){
        return res.json({message : "username already exists"});
    }
    users.push({username : username ,
                 password : password});    
    return res.json({message : "signup successful"});
    
});

app.post( '/signin' , (req, res) => {
    const username =  req.body.username;
    const password =  req.body.password;

    const user = users.find(user => user.username === username && user.password === password);
    if(user){
       const token = generateToken();
        user.token = token;
        return res.json({message : "signin successful" , token : token , users : users});
    }
    else {
        return res.status(
            403
        ).json({message : "username or password is incorrect"});
    }
});


app.get("/me" , (req, res) => {
    const token = req.headers.Authorization;
    const user = users.find(user => user.token === token);
    if(user){
        return res.json({message : "user found" , user : user});
    }
    else {
        return res.status(
            403
        ).json({message : "user not found"});
    }
});

app.listen(3000);