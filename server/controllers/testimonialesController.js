const Testimonial = require('../models/Testimoniales');

exports.mostrarTestimoniales = (req, res) => {
    Testimonial.findAll()
        .then(testimoniales => res.render('testimoniales', {
            pagina: 'Valoraciones de los Clientes',
            testimoniales
        }))
}


exports.leerTestimoniales = (req, res) => {
    //Validamos los campos que no esten vacios
    let { nombre, correo, mensaje } = req.body;
    let errores = [];
    if (!nombre) {
        errores.push({ 'mensaje': 'Agrega un nombre' });
    }
    if (!correo) {
        errores.push({ 'mensaje': 'Agrega un correo' });
    }
    if (!mensaje) {
        errores.push({ 'mensaje': 'Agrega un valoración' });
    }


    //Revisar por errores
    if (errores.length > 0) {
        //Muestra la vista con errores
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje
        })
    } else {
        //Guardamos en la BD
        Testimonial.create({
                nombre,
                correo,
                mensaje
            })
            .then(testimonial => res.redirect('/testimoniales'))
            .catch(error => console.log(error));
    }
}

//VAmos a hacer lo mismo con Async Await

exports.mostrarTestimoniales = async(req, res) => {
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'Valoraciones de los Clientes',
        testimoniales
    })
}


exports.leerTestimoniales = async(req, res) => {
    //Validamos los campos que no esten vacios
    let { nombre, correo, mensaje } = req.body;
    let errores = [];
    if (!nombre) {
        errores.push({ 'mensaje': 'Agrega un nombre' });
    }
    if (!correo) {
        errores.push({ 'mensaje': 'Agrega un correo' });
    }
    if (!mensaje) {
        errores.push({ 'mensaje': 'Agrega un valoración' });
    }


    //Revisar por errores
    if (errores.length > 0) {
        //Muestra la vista con errores
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje,
            pagina: 'Página Testimoniales',
            testmoniales

        })
    } else {
        //Guardamos en la BD
        Testimonial.create({
                nombre,
                correo,
                mensaje
            })
            .then(testimonial => res.redirect('/testimoniales'))
            .catch(error => console.log(error));
    }
}