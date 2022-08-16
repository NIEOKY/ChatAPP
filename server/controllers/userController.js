//en esta carpeta interpretamos el body enviado desde el frontend

const User = require('../model/userModel');
const bycript = require('bcrypt');

module.exports.register = async (req, res, next) => {
  try {
    //primero resibo la request y la convierto en un objeto igual a mi modelo
    const { username, email, password } = req.body;
    //creo una variable para verificar repetidos
    const usernameCheck = await User.findOne({ username });

    if (usernameCheck != null) {
      return res.json({ msg: 'username already used', status: false });
    }
    const emailCheck = await User.findOne({ email });
    if (emailCheck != null) {
      return res.json({ msg: 'email already used', status: false });
    }
    //si no hay nada repetido encrioto la contraseña
    const hashedPassword = await bycript.hash(password, 10);
    //creo una nueva entrada en la tabla con mis datos
    const user = await User.create({
      email,
      username,
      password,
    });
    //elimino la contraseña para tener mas seguridad
    delete user.password;
    //regreso codigo de true
    return res.json({ status: true, user });
  } catch (error) {
    //esta funcion es de express y se encarga de trabajar con los errores
    next(error);
  }
};
