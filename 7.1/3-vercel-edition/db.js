const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const todoSchema = new mongoose.Schema({
    title: String,
    done: Boolean,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const UserModel = mongoose.model('User', userSchema);
const TodoModel = mongoose.model('Todo', todoSchema);

module.exports = {
    UserModel,
    TodoModel
};
