const express=  require('express');
const route= express.Router();


const controller= require('../controller/controller');

// route.get('/', function(req, res) {
//     // res.render('index',{data:{userQuery : req.params.userQuery}})
//     res.render('index')
// });
route.get('/addNewEmployee', function(req, res) {
    res.render('addNewEmployee')
});
route.get('/editEmployee', function(req, res) {
    res.render('addNewEmployee')
});
route.get('/deleteEmployee', function(req, res) {
    res.render('addNewEmployee')
});

route.post('/addNewEmployee',controller.create);
route.get('/',controller.findUser);
route.get('/api/users/:id',controller.findOneUser);
route.post('/editEmployee',controller.uupdate);
route.delete('/deleteEmployee',controller.delete );


module.exports = route;