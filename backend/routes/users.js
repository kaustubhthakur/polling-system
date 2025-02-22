const express = require('express')
const router = express.Router();
const protectRoute = require('../utils/protectRoute')
const {getUser,getUsers,deleteUser}  = require('../controllers/users')
router.get('/:id',protectRoute,getUser)
router.delete('/:id',protectRoute,deleteUser)
router.get('/',getUsers)
module.exports = router;