const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");

//Async process
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.readFile);

//server set up
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//middleware
app.use(express.static("./develop/public"));