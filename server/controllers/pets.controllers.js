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
    //const {tipo, nombre, color, tamanho} =  req.body;
    const {nombre} = req.body;
    //const fecha = new Date();
    //console.log(`${fecha.getHours()}:${(fecha.getMinutes() >= 0 && fecha.getMinutes() < 10) ? "0"+fecha.getMinutes() : fecha.getMinutes()}:${fecha.getSeconds()}`);
    Pets.findOne({nombre: nombre})
        .then(result => {
            if(result){
                res.json({error: true, message: "No se puede repetir el nombre del animal"})
            } else{
                //Pets.create({tipo: tipo, nombre: nombre, color: color, tamanho: tamanho, fecha:`${fecha.getHours()}:${(fecha.getMinutes() >= 0 && fecha.getMinutes() < 10) ? "0"+fecha.getMinutes() : fecha.getMinutes()}:${fecha.getSeconds()}`})
                Pets.create(req.body)
                    .then(response => res.json({data: response}))
                    .catch(err => {
                        res.json({error: err, message: "No sé registro al animal"});
                        res.sendStatus(500);
                    })
            }
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

