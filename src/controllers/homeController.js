const getHomepage = (req, res) => {
    // process data
    res.send('Prism9x - Hello World!')
}

const getPrism9x = (req, res) => {
    //process data
    res.render('sample.ejs');
}
module.exports = {
    getHomepage,
    getPrism9x
}