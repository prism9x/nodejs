//import lib
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Prism9x - Hello World!')
})

router.get('/prism9x', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router