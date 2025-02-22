const express = require('express')
const router = express.Router();
const protectRoute = require('../utils/protectRoute')
const {getqueries,getquery,addVote,createquery,deleteQuery} = require('../controllers/queries')
router.post('/',protectRoute,createquery);
router.put('/:queryId/:optionId',protectRoute,addVote)
router.get('/:id',protectRoute,getquery)
router.get('/',getqueries)
router.delete('/:id',protectRoute,deleteQuery)
module.exports = router;