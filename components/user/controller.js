const store = require('./store');

function addUser(name){
    if(!name){
        return new Promise.reject('Invalid name');
    }

    const fullMessage = {
        name,
        date: new Date()
    }

    return store.add(fullMessage);
};


module.exports = {
    addUser
}