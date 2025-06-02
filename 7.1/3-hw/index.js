const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { UserModel, TodoModel } = require('./db');
const { z } = require('zod');
const path = require('path');
const app = express();
const fs = require('fs');


app.listen(3000);


const JWT_SECRET = "Ilovekara"; 
const saltRounds = 5;

mongoose.connect('mongodb+srv://23bcs037:2PNRnxkGdUPdjv4r@cluster0.q5kwrtg.mongodb.net/todo-app-hitx');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



function auth(req, res, next) {
    const token = req.headers.token;

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const verified_token = jwt.verify(token, JWT_SECRET);
        req.headers.userId = verified_token.id;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}

app.post('/signup', async (req, res) => {
    const { email, password, name } = req.body;

    const bodySchema = z.object({
        email: z.string().email().min(5).max(50),
        password: z.string().min(6),
        name: z.string().min(1)
    });

    const parsed_data = bodySchema.safeParse(req.body);

    if (!parsed_data.success) {
        return res.status(400).json({
            message: parsed_data.error.errors
        });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
    }

    const hashed_password = await bcrypt.hash(password, saltRounds);

    await UserModel.create({
        email,
        password: hashed_password,
        name
    });

    res.status(201).json({
        message: 'User created successfully!'
    });
});

app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: 'Please provide all the fields'
        });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

        res.json({
            message: 'User signed in successfully',
            token
        });
    } else {
        res.status(401).json({ message: 'Invalid password' });
    }
});

app.post('/todos', auth, async (req, res) => {
    const userId = req.headers.userId;

    const { title, done } = req.body;

    if (!title) {
        return res.status(400).json({ message: 'Todo title is required' });
    }

    const todo = await TodoModel.create({
        title,
        done: done || false,
        userId
    });

    res.status(201).json({
        message: 'Todo created successfully!',
        todo
    });
});

app.get('/todos', auth, async (req, res) => {
    const userId = req.headers.userId;

    const todos = await TodoModel.find({ userId });

    res.json({
        message: 'Todos fetched successfully',
        todos
    });
});

app.patch('/todos/:id', auth, async (req, res) => {
    const todoId = req.params.id;
    const { done } = req.body;

    try {
        await TodoModel.updateOne({ _id: todoId }, { done });
        res.json({ message: "Todo updated successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error updating todo" });
    }
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
