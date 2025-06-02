const mongoose = require('mongoose');
// console.log('Connected to MongoDB');
// mongoose.connect('mongodb+srv://23bcs037:2PNRnxkGdUPdjv4r@cluster0.q5kwrtg.mongodb.net/hithx-course-selling-web');
// noan ideal way to connect to mongodb

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId; // <- corrected: use `mongoose.Types.ObjectId`

const UserSchema = new Schema({
    first_name: String,
    last_name: String,
    email: { type: String, unique: true },
    password: String
});

const adminSchema = new Schema({
    first_name: String,
    last_name: String,
    email: { type: String, unique: true },
    password: String
});

const CourseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    image: String
});

const PurchaseSchema = new Schema({
    user_id: ObjectId,
    course_id: ObjectId,
    price: Number
});

const UserModel = mongoose.model('Users', UserSchema);
const AdminModel = mongoose.model('Admins', adminSchema);
const CourseModel = mongoose.model('Courses', CourseSchema);
const PurchasesModel = mongoose.model('Purchases', PurchaseSchema);

module.exports = {
    UserModel,
    AdminModel,
    CourseModel,
    PurchasesModel
};
