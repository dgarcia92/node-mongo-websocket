const Model = require('./model');

const addChat = (chatUsers) => {
    const myChat = new Model(chatUsers);
    myChat.save();
}

const getChats = (userId) => {
    return new Promise((resolve, reject) => {
        let filter =  !userId ? {} : { users : userId };
        const chats =  Model.find(filter)
        .populate('users')
        .exec((err, populated) => {
            if(err){
                reject(e);
                return false;
            }
            resolve(populated);
        });
        
    });
}

module.exports = {
    add : addChat,
    list : getChats
}