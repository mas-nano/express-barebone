const { getUsers } = require("../controllers/userController");

module.exports = {
  path: "/user",
  config: (router) => {
    router.get("/", getUsers);

    return router;
  },
};
