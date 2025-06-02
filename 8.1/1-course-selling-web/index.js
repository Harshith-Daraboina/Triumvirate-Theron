const express = require('express');
const {z} = require('zod');
const mongoose =require('mongoose');
const app = express();
const cors = require('cors');



const port = 3000;

const{adminRouter}  = require('./routes/admin.js');
const { coursesRouter } = require('./routes/course.js');
const { userRouter } = require('./routes/user.js');

app.use(express.json());
app.use(cors());

app.use('/api/courses', coursesRouter);
app.use('/api/admin', adminRouter);
app.use('/api/users', userRouter);


async function main() {
    try{
    await mongoose.connect('mongodb+srv://23bcs037:2PNRnxkGdUPdjv4r@cluster0.q5kwrtg.mongodb.net/hithx-course-selling-web');
    }catch(err){
        console.log(err);
    }
    console.log('Connected to MongoDB and Listening on port ' + port);
}
main();

app.listen(port);
