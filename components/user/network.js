const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();


router.post('/', (req, res) => {
    controller.addUser(req.body.name)
    .then((dataResponse) =>{
        response.success(req, res, dataResponse, 201);
    }).catch(() =>{
        response.error(req, res, 'Información inválida', 400, 'Error en el controlador');
    });    
});

module.exports = router;