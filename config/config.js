require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'env',
  dbUri: process.env.DB_URI,
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET,
};

module.exports = { config };
