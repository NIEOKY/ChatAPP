//este es el modelo que sera ingresado a la base de datos, definimos todos los tipos y las condiciones

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    min: 3,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
});
//aqui estoy creando una tabla de usuarios que van a seguir la estructura de userschema
module.exports = mongoose.model('users', userSchema);
