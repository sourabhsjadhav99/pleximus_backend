let dotenv=require('dotenv').config()
const express = require("express");
const app = express();
const port =process.env.PORT || 5000
const formRoutes = require("./src/routes/crud");
const loginRoutes= require("./src/routes/login");
require("./src/connectionAndSchema/config");
let cors = require("cors")

 
app.use(cors())
app.use("/product",formRoutes)
app.use("/",loginRoutes)

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;