var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("admin/home", { title: "admin home page" });
});

module.exports = router;
