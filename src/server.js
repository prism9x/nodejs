const { render } = require('ejs')
const express = require('express')
const path = require('path')

const app = express()
const port = 3030

//config tempalte engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Prism9x - Hello World!')
})

app.get('/prism9x', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})