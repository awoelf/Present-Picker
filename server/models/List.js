const { Schema, model } = require('mongoose');
const itemSchema = require('./Item');

const listSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: 'My List',
        minLength: 1,
        maxLength: 32,
        trim: true
    },
    description: {
        type: String,
        required: false,
        minLength: 1,
        maxLength: 128,
        trim: true
    },
    theme: {
        type: String,
        required: true,
        default: 'default'
    },
    Items: [itemSchema],
});

const List = model('List', listSchema);

module.exports = List;