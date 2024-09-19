const Product = require("../model/product.model");
async function getProduct(req, res) {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (e) {
    res.status(500).send(e.toString());
  }
}
async function saveProduct(req, res) {
  try {
    const body = req.body;
    const newProduct = await Product.create(body);
    res.send(newProduct);
  } catch (e) {
    res.status(500).send(e.toString());
  }
}
async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const body = req.body;
    const updateDProduct = await Product.findOneAndUpdate({ _id: id }, body, {
      returnDocument: "after",
    });
    res.status(200).send(updateDProduct);
  } catch (e) {
    res.status(500).send(e.toString());
  }
}
async function deletProduct(req, res) {
  try {
    const { id } = req.params;
    await Product.deleteOne({ _id: id });

    res.status(200).send(`${id} deleted`);
  } catch (e) {
    res.status(500).send(e.toString());
  }
}
module.exports = { getProduct, saveProduct, updateProduct, deletProduct };
