const express = require("express");
module.exports = (app) => {
  require("fs")
    .readdirSync(__dirname)
    .forEach((file) => {
      if (file === "index.js") return;
      const router = express.Router();
      const routeModule = require(require("path").join(__dirname, file));
      const path = "/api/v1" + routeModule.path;
      const route = routeModule.config(router);

      app.use(path, route);
    });
};
