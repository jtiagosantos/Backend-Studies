const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    }
});

const HomeModel = mongoose.model('Home', HomeSchema); //para criar o model - (nomeDoModel, schemaDoModel)

module.exports = HomeModel;