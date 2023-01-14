const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const router = require("./src/routes/index.js");

dotenv.config();
const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(process.env.APP_PORT, () =>
  console.log("Server running at port " + process.env.APP_PORT)
);
