const express = require('express');
//const path = require('path');
const nodemailer = require('nodemailer')
//const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(cors());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  
//app.use(express.static("public"));


//Setting up routes for pages.
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));