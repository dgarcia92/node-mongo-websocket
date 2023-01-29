const mongoose = require('mongoose');
const mySchema = mongoose.Schema({
    name : String,
    date: Date
});

const model = mongoose.model('User', mySchema);
module.exports = model;