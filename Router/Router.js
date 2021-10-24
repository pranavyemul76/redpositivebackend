const express = require('express');
const routes= express.Router();

const controllersignup= require('../Controllers/User');
routes.get('/userget',controllersignup.userdata);
routes.post('/userpost',controllersignup.userpost);
routes.delete('/deletedata/:email',controllersignup.userdelete);
routes.put('/userupdate',controllersignup.userupdate);
routes.post('/emailsend',controllersignup.sendemail);
module.exports= routes;
