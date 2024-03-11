const express = require('express');

const router = express.Router();

router.get('/success', (req, res, next) => {
    res.send("Form successfully filled");
});

module.exports = router;