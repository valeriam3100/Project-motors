const express = require('express');
const route = express.Router();

//
//
Router.use(express.static("public"));
Router.use("/css", express.static(__dirname + "public/css"));
Router.use("/js", express.static(__dirname + "public/js"));
Router.use("/images", express.static(__dirname + "public/images"));

module.exports = Router;