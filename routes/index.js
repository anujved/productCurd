const routes = require("express").Router();
const { getProduct, saveProduct, updateProduct, deletProduct } = require('../controller/proucts.controller');

routes
  .get("/", getProduct)
  .post("/", saveProduct)
  .put("/:id", updateProduct)
  .delete("/:id", deletProduct);

module.exports = routes;
