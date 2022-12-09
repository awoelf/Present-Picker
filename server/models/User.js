const { Schema, model } = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (email) => {
        return validator.isEmail(email);
      },
      message: (email) => `${email.value} is not a valid email.`,
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (password) => {
        return validator.isStrongPassword(password);
      },
      message: (password) => `${password.value} is not a valid password.`,
    },
  },
  lists: [
    {
      type: Schema.Types.ObjectId,
      ref: "List",
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
