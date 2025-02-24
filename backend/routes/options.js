const express = require('express')
const router = express.Router();
const protectRoute = require('../utils/protectRoute')
const {createoption} = require('../controllers/option')
router.post('/:queryid',protectRoute,createoption)
module.exports = router;