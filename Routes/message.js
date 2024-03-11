const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res, next) => {
    fs.readFile('message.txt' , {encoding: 'utf-8'}, (err , data) => {
        if(err){
            console.log(err);
            data = "No chat";
        }
        res.send(
        `${data}<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">
        <input type="text" id="message" name="message" placeholder="message">
        <input type="hidden" name="username" id="username">
        <button type="submit">Send</button>
        <br></form>
        <a href="/contactus"><button type="submit" action="/contactus" method="POST">Contact Us</button></a>`
        );
    });
});

router.use('/contactus', (req, res) => {
    res.sendFile(__dirname, '../' , 'views' , 'contactus.html');
});


router.post('/contactus',(req, res, next) => {
    res.redirect('/contactus');
});

router.post('/contactus', (req, res) => {
    res.redirect('/success');
});

router.get('/success', (req, res) => {
    res.send('Form successfully filled');
});

router.post('/', (req, res, next) => {
    fs.writeFile("message.txt", `${req.body.username} : ${req.body.message}`,{flag: 'a'}, (err) => {
        if (err) {
            console.log(err); 
        } else {
            res.redirect('/');
        }
    });
});

module.exports = router;