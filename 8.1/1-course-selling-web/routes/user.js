const {z} = require('zod');
const {Router} = require('express');
const UserModel = require('../db').UserModel;
    const userRouter = Router();

    userRouter.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    const userSchema = z.object({
        name: z.string().min(1).max(20),
        email: z.string().email(),
        password: z.string().min(8).max(20)
    });

    try {
        const parsed_user = userSchema.parse({ name, email, password });

        res.json({
            message: 'Sign up success',
            user: parsed_user
        });

    } catch (err) {
        res.status(400).json({
            message: 'Invalid user data',
            errors: err.errors // Optional: Send detailed validation errors
        });
    }
});

    userRouter.post('/signin', (req, res) => {
    
    });


module.exports ={
    userRouter: userRouter
}