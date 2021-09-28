const express = require('express');
const router  = express();
const {listar, buscar, nuevo, editar, borrar} = require(`../controllers/pets.controllers`);

router.get(`/pets`, listar);
router.get(`/pets/:id`, buscar);
router.post(`/pets/new`, nuevo);
router.put(`/pets/edit/:id`, editar);
router.delete(`/pets/delete/:id`, borrar);

module.exports = router;