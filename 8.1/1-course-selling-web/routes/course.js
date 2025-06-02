const {Router} = require('express');

const coursesRouter = Router();

coursesRouter.get('/', (req, res) => {
    res.json({
        message: 'get courses'
    }); 
});
coursesRouter.get('/purchase', (req, res) => { 
    res.json({
        message: 'get courses payment'
    }); 
});
coursesRouter.get('/purchases', (req, res) => {
    res.json({
        message: 'get paided courses'
    }); 
});




module.exports =  {
    coursesRouter: coursesRouter
}