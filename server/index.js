//importamos todo lo necesario para usar express mongoose y cors (middleware dinamico)
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

//definimos app como express y utilizamos env para las config del server
const app = express();
require('dotenv').config();

//utilizamos cors y express json para hacer mas faciles los metodos http
app.use(cors());
app.use(express.json());
app.use('/api/auth', userRoutes);

//creamos una promesa para intentar conectar a la base de datos (mongodb)
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('db conection succeful');
  })
  .catch((err) => {
    console.log(err);
  });

//iniciamos el server
const server = app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
