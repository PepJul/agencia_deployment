const express = require('express');
const router = express.Router();

const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

module.exports = function() {

    router.get('/', homeController.consultasHomePage);
    router.get('/nosotros', nosotrosController.nosotrosInfo);
    router.get('/viajes', viajesController.consultaViajes);
    router.get('/viajes/:id', viajesController.mostrarViaje);
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);
    router.post('/testimoniales', testimonialesController.leerTestimoniales);

    return router;
}