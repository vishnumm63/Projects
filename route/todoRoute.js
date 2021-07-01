const ctrl=require('../controller/todoCtrl');

const express=require('express');
const route=express.Router();

route.get('/',ctrl.home);
route.get('/home',ctrl.home);

route.post('/create',ctrl.create);
route.get('/edit/:id',ctrl.getData);
route.post('/edit/:id',ctrl.update),

route.get('/delete/:id',ctrl.delete);

module.exports=route;