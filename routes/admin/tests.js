var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("admin/tests", { title: "admin tests page" });
  //res.send("admin tests conected");
});

module.exports = router;
