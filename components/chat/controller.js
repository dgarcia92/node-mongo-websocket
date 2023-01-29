const store = require('./store');

function addChat(users){    

    return new Promise((resolve, reject) => {

        if(!users || !Array.isArray(users)){
            console.log('[Error] no hay usuarios');
            reject('Los datos son incorrectos');
            return false;
        }

        const chat = {
            users,
            date: new Date()
        }

        store.add(chat);
        resolve(chat);
    });
}

const getChats = (userId) => {
    return store.list(userId);
}

module.exports = {
    addChat,
    getChats
}