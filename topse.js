const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
let path = require("path");



require("dotenv").config();
//require("./config/db");


const port = process.env.PORT;
console.log("port:::" + port);


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const authRoutes = require("./routes/Auth");
app.use("/api/v1/auth", authRoutes);



app.listen(port, () => {
  console.log(`Server running on Port - ${port}`);

});
