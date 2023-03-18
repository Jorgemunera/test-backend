const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsersSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    role: {
      type: ['user', 'admin'],
      default: 'user',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const usersModel = mongoose.model('users', UsersSchema);

module.exports = usersModel;
