// import lib
const path = require('path')
const express = require('express')


//config view engine
console.log('>>> Check __dir', __dirname)
const configViewEngine = (app) => {
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')

    // config static file
    app.use(express.static('public'))
}



module.exports = configViewEngine;