const path = require('path');

const express = require('express');
const fs = require('fs');

const loginRoutes = require('./Routes/login');
const messageRoutes = require('./Routes/message');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(loginRoutes);
app.use(messageRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname ,'views' , '404.html');
})

app.listen(3000); 

