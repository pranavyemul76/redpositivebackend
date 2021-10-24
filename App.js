require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const  Mongoose  = require('mongoose');
const http = require('http');
const cors = require('cors');
const PORT = process.env.PORT || '8000';
const HOST = process.env.HOST;
const app= express();
const Router = require('./Router/Router');
app.use(express.urlencoded({extended:false}));
app.use(bodyparser.json());
const options={
    origin:'*'
}
app.use(cors(options))
app.use('/',Router);

Mongoose.connect(process.env.URLS,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(
    app.listen(PORT,HOST, () => {
        console.log(`server run on ${HOST} ${PORT} `)
    })
).catch( error =>{console.log(error)}
    
)


