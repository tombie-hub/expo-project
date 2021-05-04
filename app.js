const express = require('express');
const app = express();
const config = require('./config');

//routers
const apiRouter = require('./routes/api');

app.use('/', apiRouter),

app.listen(config.port, function(){
    console.log('serwer slucha... http://localhost:' + config.port)
})