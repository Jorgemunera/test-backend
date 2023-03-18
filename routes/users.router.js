const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const checkRoles = require('../middlewares/auth.handler');
const { config } = require('../config/config');
const validatorHandler = require('../middlewares/validator.handler');
const { createUserSchema, deleteUserSchema } = require('../schemas/users.schema');
const UsersService = require('../services/users.service');

const service = new UsersService();

const router = express.Router();

router.get(
  '/',
  async (req, res, next) => {
    try {
      const users = await service.getUsers();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  },
);

router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req;
      const newUser = await service.createUser(body);
      res.status(201).json(newUser);
    } catch (err) {
      next(err);
    }
  },
);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles(['admin']),
  validatorHandler(deleteUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.deleteUser(id);
      res.status(201).json({ id });
    } catch (err) {
      next(err);
    }
  },
);

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const { user } = req;
      const payload = {
        sub: user._id,
        role: user.role,
      };

      const token = jwt.sign(payload, config.jwtSecret);

      res.json({
        user,
        token,
      });
    } catch (err) {
      next(err);
    }
  },
);

module.exports = router;
