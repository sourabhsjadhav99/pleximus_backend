const express = require("express");
const app = express();
const port =8000
const formRoutes = require("./routes/crud");
const loginRoutes= require("./routes/login");
require("./connectionAndSchema/config");
 

app.use("/product",formRoutes)
app.use("/",loginRoutes)

  app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;