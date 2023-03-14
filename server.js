//import express
import express from "express";
import morgan from "morgan";
import productRouter from "./routes/product.routes.js";

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use("/products", productRouter);

app.get("/test", (req, res, next) => {
  try {
    res.json({ msg: "Testing Routes" });
  } catch (error) {
    next(error);
  }
});

//404 Error Handler
app.use((req, res, next) => {
  try {
    res.status(404).json({ msg: "Routes Doesn't Exist" });
  } catch (error) {
    next(error);
  }
});

//Server Error
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send("Sever Error");
});

app.listen(3000, () => {
  console.log("Server is Running...");
});
