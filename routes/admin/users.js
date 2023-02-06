var express = require("express");
var router = express.Router();

/* GET users listing. */

router.get("/", function (req, res, next) {
  res.render("admin/users", { title: "admin users page" });
});

module.exports = router;
