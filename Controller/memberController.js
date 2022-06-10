const express = require("express");
//proporciona todos los métodos para el enrutado.
const router = express.Router();

//GET collection
//endpoint para escuchar el listado completo
router.get("/", (req, res) => {
  res.send("GET ALL");
});
//endpoint para detalle del documento por id
router.get("/:id", (req, res) => {
  res.send(`Get doc by id: ${req.params.id}`);
});
//endpoint para hacer insertar en el documento
router.post("/", (req, res) => {
  res.send(`POST document`);
});
//endpoint para actualizar un documento concreto
router.patch("/:id", (req, res) => {
  res.send(`Update doc by id: ${req.params.id}`);
});
//endpoint para borrar documento concreto
router.delete("/:id", (req, res) => {
  res.send(`Delete doc by id: ${req.params.id}`);
});

module.exports = router
