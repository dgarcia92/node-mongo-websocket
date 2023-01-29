const Model = require('./model');

const addMessage = (message) => {
    const myMessage = new Model(message);
    myMessage.save();
}

const getMessages = (filterUser) => {

    return new Promise((resolve, reject) => {

        let filter =  filterUser == null ? {} : { user : filterUser };
        const messages =  Model.find(filter)
        .populate('user')
        .catch(e => {
            reject(e);
        });

        resolve(messages);
    });
}

const updateMessage = async(id, message) => {
    const messagaDb = await Model.findOne({_id : id});
    messagaDb.message = message;
    const newMessage = await messagaDb.save(messagaDb);
    return newMessage;
}

const deleteMessate = (id) => {
    return Model.deleteOne({_id : id});
}


module.exports = {
    add : addMessage,
    list: getMessages,
    update: updateMessage,
    delete: deleteMessate
}