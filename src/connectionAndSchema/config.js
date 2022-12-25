const mongoose = require("mongoose");
let url ="mongodb+srv://sourabh:sourabh@cluster0.9orvhmn.mongodb.net/productsdb?retryWrites=true&w=majority"
mongoose
  .connect(url, { useUnifiedTopology:true,
    useNewUrlParser: true})
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.log(`Error connecting to the database. n${err}`);
  });
