//import lib
require('dotenv').config()
const { render } = require('ejs')
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

// config 
const app = express()
const port = process.env.PORT || 3030
const hostname = process.env.HOST_NAME

// config view engine
configViewEngine(app);

// router
app.use('/', webRoutes)

app.listen(port, hostname, () => {
    console.log(`App listening on port ${port}`)
})