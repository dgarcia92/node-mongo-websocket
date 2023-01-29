const express = require('express');
const multer = require('multer');

const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

const upload = multer({
    dest: 'public/files'
});


router.get('/', (req, res) => {
    const filterMessages = req.query.user || null;

    controller.getMessages(filterMessages)
    .then( messageList => {
        response.success(req, res, messageList,  200);
    })
    .catch(e => {
        response.error(req, res, 'Unespected Error',  500, e);
    });
    
});

router.post('/', upload.single('file'), (req, res) => {

    console.log(req.file);

    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then((dataResponse) =>{
        response.success(req, res, dataResponse, 201);
    }).catch( e =>{
        response.error(req, res, 'Información inválida', 400, e);
    });    
});


router.patch('/:id', (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
    .then((data)=> {
        response.success(req, res, data, 200);
    })
    .catch(e => {
        response.error(req, res, 'Error interno', 500, e);
    });
});


router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
    .then(() => {
        response.error(req, res, `El mensaje ${req.params.id} eliminado`, 200);
    })
    .catch(e => {
        response.error(req, res, 'Error interno', 500, e);
    })
});


module.exports = router;