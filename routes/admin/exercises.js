var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("admin/exercises", { title: "admin exercises page" });
  //res.send("admin exercices conected");
});

module.exports = router;
