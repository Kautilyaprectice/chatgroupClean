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
        <button type="submit">Send</button></form>
        <div><a href="/contactus"><button>Contact Us</button></a></div>`
        );
    });
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
