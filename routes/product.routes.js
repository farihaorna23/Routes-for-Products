import express from "express";
import products from "../controllers/product.controllers.js";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  const { id } = req.params; //a string
  let data;
  try {
    if (id) {
      if (isNaN(parseInt(id))) {
        res.status(400).json({ msg: "Invalid Id" });
      }
      data = await products.findOne(parseInt(id));
    } else {
      data = await products.findAll();
    }
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const productInfo = req.body;
  try {
    let data = await products.addOne(productInfo); //data is an object that query sends with properties like insertId
    res.json({ msg: "Successfully added" });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params; //a string
  const productInfo = req.body;
  try {
    if (isNaN(parseInt(id))) {
      res.status(400).json({ msg: "Invalid Id" });
    }
    let data = await products.updateOne(productInfo, parseInt(id));
    res.json({ msg: "Successfully Updated" });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    if (isNaN(parseInt(id))) {
      res.status(400).json({ msg: "Invalid Id" });
    }
    let data = await products.removeOne(parseInt(id));
    res.json({ msg: "Removed Successfully" });
  } catch (error) {}
});

export default router;
