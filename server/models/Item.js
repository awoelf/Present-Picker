const { Schema } = require('mongoose');

const itemSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 24
        },
        price: {
            type: Number,
            min: 0,
        },
        retailer: {
            type: String,
        },
        link: {
            type: String,
        },
        quantity: {
            type: Number,
            min: 1,
        },
        size: {
            type: Mixed,
        },
        color: {
            type: String
        },
    },
);

module.exports = itemSchema;