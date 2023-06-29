const express = require("express");
const morgan = require("morgan"); //loggin
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.set("port", process.env.PORT || 8081);
const MONGODB_URL = process.env.MONGODB_URL;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

mongoose.connect(MONGODB_URL).then(
  () => {
    console.log("Connected to MongoDB - ", MONGODB_URL);
    app.listen(app.get("port"), () => {
      console.log("API Server Listening on PORT ", app.get("port"));
    });
  },
  (err) => {
    console.log("Error connecting to MongoDB: ", err);
  }
);

app.get("/", (req, res) => {
  res.send("Hello world");
});

const api = require("./api");
app.use("/api", api);
