var express = require("express");
var router = express.Router();

/* GET users listing. */

router.get("/", function (req, res, next) {
  res.render("exercices", { title: "exercices page" });
});

module.exports = router;
