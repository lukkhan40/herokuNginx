const express = require("express");
require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();
const M = require("./model/M");

//Variables de entorno local
require("dotenv").config({ path: "env.env" });

//Conectar con Mongo
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASEMDB_URL, {
  useNewUrlParser: true,
});

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`listen at port ${PORT}`);
});

app.post("/", async (req, res) => {
  let respuesta;
  const m = new M({ mensaje: req.body.mensaje });
  try {
    let resultado = await m.save();
    respuesta = { mensaje: "Correcto" };
  } catch (error) {
    console.error(error);
    respuesta = { error: "Error" };
  }
  res.json(respuesta);
});
