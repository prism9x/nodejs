//import lib
const express = require('express')
const router = express.Router()
const {
    getHomepage,
    getPrism9x
} = require('../controllers/homeController')



router.get('/', getHomepage)
router.get('/prism9x', getPrism9x)

module.exports = router