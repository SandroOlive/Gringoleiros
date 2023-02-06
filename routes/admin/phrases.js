var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("admin/phrases", { title: "admin phrases page" });
  //res.send("admin phrases conected");
});

module.exports = router;
