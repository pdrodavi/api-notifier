const express = require('express');
const router = express.Router()

const notifierService = require('./notifierService');

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
});

router.use(notifierService);

module.exports = router;
