//primero obtenemos la variable register que contiene toda la informacion previamente mandada
const { register, login } = require('../controllers/userController');
//creamos una variable router que nos sera de mucha utilidad
const router = require('express').Router();
//creamos la solicitud post en la direccion register con la data de reigster
router.post('/register', register);
router.post('/login', login);

module.exports = router;
