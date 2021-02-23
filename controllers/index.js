

const index = (req, res) => {
    res.render('index')
}

const getProducts = (req, res) => {
    res.render('products')
}

const addProduct = (req, res) => {
    res.render('products')
}

const about = (req, res) => {
    res.render('about')
}

const contact = (req, res) => {
    res.render('contactus')
}

const subscribe = (req, res) => {
    res.render('users')
}

const proyects = (req, res) => {
    res.render('proyects')
}

module.exports = {
    index,
    getProducts,
    addProduct,
    about,
    contact,
    proyects,
    subscribe
}

