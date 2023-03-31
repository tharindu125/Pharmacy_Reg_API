const express = require('express')
const {
    createDetails,
    getDetails,
    getDetail
    
} = require('../controllers/registerControllers')


const router = express.Router()

//get all details
router.get('/',getDetails)

// GET a single detail
router.get('/:email', getDetail)

//POST a new detail
router.post('/', createDetails)



module.exports = router
