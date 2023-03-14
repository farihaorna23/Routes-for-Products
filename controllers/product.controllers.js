import query from "../db/utilis.js";

const findOne = async productId => {
  return await query("SELECT * FROM products WHERE ProductId = ?", [productId]);
};

const findAll = async () => {
  return await query("SELECT * FROM products ");
};

const addOne = async product => {
  return await query("INSERT INTO products SET ?", [product]);
};

const updateOne = async (updateProduct, productId) => {
  return await query("UPDATE products SET ? WHERE ProductId = ?", [
    updateProduct,
    productId
  ]);
};

const removeOne = async productId => {
  return await query("DELETE FROM products WHERE ProductId = ?", [productId]);
};

export default {
  findOne,
  findAll,
  addOne,
  updateOne,
  removeOne
};
