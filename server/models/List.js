const { Schema, model } = require('mongoose');
const itemSchema = require('./Item');

const listSchema = new Schema({
    listName: {
        type: String,
        required: true,
        default: 'My List',
        minLength: 1,
        maxLength: 32,
        trim: true
    },
    listAuthor: {
        type: String,
        required: true,
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
    items: [itemSchema],
});

const List = model('List', listSchema);

module.exports = List;