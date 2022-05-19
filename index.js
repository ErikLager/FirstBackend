const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const prodRouter = require("./api/products");

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api", prodRouter);


mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true },
    () => console.log("Connected to My first DB"));

const PORT = 5001;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));