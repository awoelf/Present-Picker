const { Schema, model } = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: email => {
                return validator.isEmail(email);
            },
            message: email => `${email.value} is not a valid email.`
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: password => {
                return validator.isStrongPassword(password);
            },
            message: password => `${password.value} is not a valid password.`
        }
    },
    lists: [
        {
            type: Schema.Types.ObjectId,
            ref: 'List'
        },
    ],
});

userSchema.pre('save', async (next) => {
    if (this.isNew || this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
});

userSchema.methods.isCorrectPassword = async (password) => {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;