const Router = require('express').Router;

const adminRouter = Router();
const AdminModel = require('../db');
adminRouter.post('/signup', (req, res) => {
  res.json({
    message: 'get admin'
  });
});
adminRouter.post('/signin', (req, res) => {
  res.json({
    message: 'get admin'
  });
});

// adminRouter.use(adminMiddleware);


adminRouter.post('/course', (req, res) => {
  res.json({
    message: 'get admin'
  });
});
adminRouter.put('/courses', (req, res) => {
  res.json({
    message: 'get admin'
  });
});
adminRouter.get('/course/bulk', (req, res) => {
  res.json({
    message: 'get admin'
  });
});

module.exports = {
  adminRouter: adminRouter
};