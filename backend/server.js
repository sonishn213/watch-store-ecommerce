const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");
const connectDB = require("./config/db");
connectDB();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//send logo

app.get("/watchlogo.png", (req, res) => {
  res.sendFile(path.join(__dirname, "watchlogo.png"));
});

//routes
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/cartitems", require("./routes/cartItemsRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/payments", require("./routes/paymentRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

//error handling
app.use(errorHandler);

//listen
app.listen(PORT, () => console.log(`Server started on port ${PORT} `));
