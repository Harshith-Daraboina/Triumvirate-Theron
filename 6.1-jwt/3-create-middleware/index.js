const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'hello,world';
const app = express();


const users = [];



app.use(express.json());


app.get("/",  (req , res) => {
    res.sendFile(__dirname + "/public/index.html");
})




app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username.length < 5 || password.length < 5) {
        return res.json({ message: "username or password is too short" });
    }

    if (users.find(user => user.username === username)) {
        return res.json({ message: "username already exists" });
    }

    users.push({ username: username, password: password });
    return res.json({ message: "signup successful" });
});

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        const token = jwt.sign({ username: username }, JWT_SECRET);

        return res.json({ message: "signin successful",  users: users , token:token});
        
    } else {
        return res.status(403).json({ message: "username or password is incorrect" });
    }
});



function auth( req ,res, next){
    const token = req.headers.token;
    const verified = jwt.verify(token, JWT_SECRET);
    if (!verified) {
        return res.status(403).json({ message: "token is invalid" });
    }
    req.user = verified;
    next();
}

app.get('/me', (req, res) => {
    const token = req.headers.token;
    const verified = jwt.verify(token, JWT_SECRET);
    if (!verified) {
        return res.status(403).json({ message: "token is invalid" });
    }

    const user = users.find(user => user.username === verified.username);
    if (user) {
        return res.json({ message: "user found", user: user });
    } else {
        return res.status(403).json({ message: "user not found" });
    }

   
});

app.listen(3000);
