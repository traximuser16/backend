const { Router } = require("express");
const { getAllProductController, createProductController } = require("../controllers/productsController");

// Initializing
const productRouter = Router();

// Routes
productRouter.get("/getAllProducts", getAllProductController);
productRouter.post("/createProduct", createProductController);

// Exporting
module.exports = productRouter;