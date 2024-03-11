const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const loginRoute = require('./Routes/login');
const messageRoute = require('./Routes/message');
const contactusRoute = require('./Routes/contactus');
const successRoute = require('./Routes/success');
const pagenotfound = require('./Routes/404')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use(loginRoute);
app.use(messageRoute);
app.use(contactusRoute);
app.use(successRoute);
app.use(pagenotfound);

app.listen(3000); 
