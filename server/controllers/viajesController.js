const Viaje = require('../models/Viajes');

/*
exports.consultaViajes = (req, res) => {
    Viaje.findAll()
        .then(viajes => res.render('viajes', {
            pagina: 'Próximos Viajes',
            viajes: viajes
        }))
        .catch(error => console.log(error))
}

exports.mostrarViaje = (req, res) => {
    Viaje.findByPk(req.params.id)
        .then(viaje => res.render('viaje', {
            viaje: viaje
        }))
        .catch(error => console.log(error))
}
*/


//Vamos a hacer lo mismo pero con Async Await

exports.consultaViajes = async(req, res) => {
    const viajes = await Viaje.findAll()
    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    })
}

exports.mostrarViaje = async(req, res) => {
    const viaje = await Viaje.findByPk(req.params.id)
    res.render('viaje', {
        viaje
    })
}