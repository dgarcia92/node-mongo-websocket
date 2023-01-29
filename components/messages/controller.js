const { socket } = require('../../socket');
const store = require('./store');

function addMessage(chat, user, message, file){
    
    return new Promise((resolve, reject) => {

        if(!user || !message){
            console.log('[Error] no hay usuario o mensaje');
            reject('Los datos son incorrectos');
            return falses;
        }

        let fileUrl = '';
        if(file) {
            fileUrl = 'http://localhost:3300/app/files/'+file.filename;
        }



        const fullMessage = {
            chat,
            user,
            message,
            date: new Date(),
            file: fileUrl
        }

        store.add(fullMessage);


        socket.io.emit('message', fullMessage);

    
        resolve(fullMessage);
    });
}


const getMessages = (filterUser) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    });
}

const updateMessage = (id, message) => {
    return new Promise(async (resolve, reject) => { 
        if(!id || !message){
            reject('Invalid data');
            return false;
        }
        const result = await store.update(id, message);
        resolve(result);
    });
}


const deleteMessage = (id) => {

    return new Promise((resolve, reject) => {

        if(!id){
            reject('Id inválido');
            return false;
        }

        store.delete(id)
        .then(() =>{
            resolve();
        })
        .catch(e => {
            reject(e);
        });
    });

};

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}