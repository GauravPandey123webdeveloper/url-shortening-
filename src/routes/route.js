// importing express to create routers and middelwares
const express = require('express');
// creating router
const router = express.Router();
// importing route handlers
const { createUrl, redirectUrl } = require("../controller/urlController")
// calling APIs
router.post('/url/shorten', createUrl)
router.get('/:urlCode', redirectUrl)
module.exports = router;