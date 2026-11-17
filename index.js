require("dotenv").config();
const port = process.env.PORT || 3000;
const connectionString = process.env.CONNECTION_STRING;

// Require other files
const db = require("./server/db.js");
const express = require("express");
//const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
    res.json({ message: "we are entering a get request!" });
});
app.listen(port);

console.log(`Server is running on port ${port}`);