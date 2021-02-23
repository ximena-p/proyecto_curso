const express = require('express');
const router = express.Router();


const indexController = require('../controllers/index');

router.get('/', indexController.index);

router.get('/products', indexController.getProducts);

router.post('/new-product', indexController.addProduct);

router.get('/about', indexController.about);

router.get('/contactus', indexController.contact);

router.get('/users', indexController.subscribe);

router.get('/proyects', indexController.proyects);


module.exports = router;
