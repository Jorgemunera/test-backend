const mongoose = require('mongoose');
const { config } = require('../config/config');

async function connectDb() {
  try {
    console.log(config.dbUri)
    await mongoose.connect(config.dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    throw new Error('Problema en la conexión a la base de datos');
  }
}

module.exports = connectDb;
