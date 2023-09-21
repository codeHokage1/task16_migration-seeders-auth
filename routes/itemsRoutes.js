const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Some response');
})


module.exports = router;