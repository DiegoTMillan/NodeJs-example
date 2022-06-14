const express = require("express");
const Model = require("../Model/memberModel");
//proporciona todos los métodos para el enrutado.
const router = express.Router();
const {verifyToken} = require('../lib/utils')

//GET collection
//endpoint para escuchar el listado completo
router.get("/", verifyToken, (req, res) => {
  Model.find()
    .exec()
    .then((data) => {
      console.log(data);
      res.status(200).json({
        status: "succeeded",
        data,
        error: null,
      });
    })
    .catch((error) => {
      res.status(404).json({
        status: "failed",
        data: [],
        error: error.message,
      });
    });
});
//Ejemplo igual que el de arriba pero con con Async/Await
// router.get("/", async (req, res,) => {
//   try{
//     const data = await Model.find();
//     res.status(200).json({
//       status: "succeeded",
//       data,
//       error: null,
//     });
//   }catch(error){
//     res.status(404).json({
//       status: "failed",
//       data,
//       error: error.message
//     });
//   }
// });
//endpoint para detalle del documento por id
router.get("/:id", verifyToken, (req, res) => {
  Model.findById(req.params.id)
    .exec()
    .then((data) => {
      console.log(data);
      res.status(200).json({
        status: "succeeded",
        data,
        error: null,
      });
    })
    .catch((error) => {
      res.status(404).json({
        status: "failed",
        data,
        error: error.message,
      });
    });
});
//endpoint para hacer insertar en el documento
router.post("/", verifyToken, (req, res) => {
  const data = new Model({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
  });
  data
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).json({
        status: "succeeded",
        data,
        error: null,
      });
    })
    .catch((error) => {
      res.status(404).json({
        status: "failed",
        data,
        error: error.message,
      });
    });
});
//endpoint para actualizar un documento concreto
router.patch("/:id", verifyToken, (req, res) => {
let id = req.params.id;
//no hace falta especificar cada campo porque a lo mejor solo cambiamos un campo y en el body viene todo
let data = req.body;
//sirve para que ten envíe en respuesta el objeto recién actualizado
let options = {
  new: true,
}
  Model
    .findByIdAndUpdate(id, data, options)
    .then((data) => {
      console.log(data);
      res.status(201).json({
        status: "succeeded",
        data,
        error: null,
      });
    })
    .catch((error) => {
      res.status(404).json({
        status: "failed",
        data,
        error: error.message,
      });
    });
});
//endpoint para borrar documento concreto
router.delete("/:id", verifyToken, (req, res) => {
  let id = req.params.id;
  Model.findByIdAndDelete(id)
  .then((data) => {
    console.log(data);
    res.status(201).json({
      status: "succeeded",
      data,
      error: null,
    });
  })
  .catch((error) => {
    res.status(404).json({
      status: "failed",
      data,
      error: error.message,
    });
  });
});

module.exports = router;
