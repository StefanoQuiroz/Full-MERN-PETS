const Pets = require(`../models/pets.models`);

const listar = (req, res) => {
    Pets.find({})
        .then(response => res.json({data: response}))
        .catch(err => {
            res.json({error: err, message: "No sé encontraron los animales"});
            res.sendStatus(404);
        })
}

const buscar = (req, res) => {
    Pets.findById(req.params.id)
        .then(response => res.json({data: response}))
        .catch(err => {
            res.json({error: err, message: "No sé encontro el animal específico"});
            res.sendStatus(404);
        })
}

const nuevo = (req, res) => {
    //console.log(req.body)
    Pets.create(req.body)
        .then(response => res.json({data: response}))
        .catch(err => {
            res.json({error: err, message: "No sé registro al animal"});
            res.sendStatus(500);
        })
}

const editar = (req, res) => {
    Pets.findByIdAndUpdate(req.params.id, req.body)
        .then(response => res.json({data: response}))
        .catch(err => {
            res.json({error: err, message: "No sé edito el registro del animal"});
            res.sendStatus(500);
        })
}

const borrar = (req, res) => {
    Pets.findByIdAndDelete(req.params.id)
        .then(response => res.json({data: "Se elimino el registro del animal"}))
        .catch(err => {
            res.json({error: err, message: "No sé elimino el registro del animal"});
            res.sendStatus(200);
        })
}

module.exports = {listar, buscar, nuevo, editar, borrar};

