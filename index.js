import express from "express";
import productRoutes from "./routes/product.routes.js";
import sellerRoutes from "./routes/seller.routes.js";

const app = express();

// to make app understand json
app.use(express.json());

// register routes
app.use(productRoutes);
app.use(sellerRoutes);

// port
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
