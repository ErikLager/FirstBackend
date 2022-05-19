const express = require("express");
const app = express();
const cors = require("cors");

const postRouter = require("./api/posts");

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api", postRouter);