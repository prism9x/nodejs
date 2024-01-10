const { render } = require('ejs')
const express = require('express')
const path = require('path')
require('dotenv').config()


const app = express()
const port = process.env.PORT || 3030
const hostname = process.env.HOST_NAME

//config tempalte engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Prism9x - Hello World!')
})

app.get('/prism9x', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`App listening on port ${port}`)
})