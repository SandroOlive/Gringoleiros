var express = require("express");
var router = express.Router();

/* GET users listing. */

router.get("/", function (req, res, next) {
  res.render("phrases", { title: "phrases page" });
});
//what?
module.exports = router;
