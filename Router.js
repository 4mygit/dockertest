const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.status(200).json({ mssg: 'This is login page' });
})


module.exports = router;
