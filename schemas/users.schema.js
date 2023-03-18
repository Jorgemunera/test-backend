const Joi = require('joi');

const id = Joi.string();
const name = Joi.string().min(4).max(20);
const lastName = Joi.string().min(4).max(20);
const email = Joi.string().email();
const password = Joi.string().min(4);
const role = Joi.string();

const createUserSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  email: email.required(),
  password: password.required(),
  role,
});

const deleteUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createUserSchema,
  deleteUserSchema,
};
