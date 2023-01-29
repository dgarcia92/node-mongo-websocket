const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/:userId', (req, res) => {
    controller.getChats(req.params.userId)
    .then(chatList => {
        response.success(req, res, chatList,  200);
    })
    .catch(e => {
        response.error(req, res, 'Unespected Error',  500, e);
    });
    
});


router.post('/', (req, res) => {
    controller.addChat(req.body.users)
    .then( data =>{
        response.success(req, res, data, 201);
    }).catch( err =>{
        response.error(req, res, 'Información inválida', 400, err);
    });    
});

module.exports = router;