const mongoose = require('mongoose');

const colection = 'users';

const schema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true
    }
});

const userModel = mongoose.model(colection, schema)

module.exports = userModel