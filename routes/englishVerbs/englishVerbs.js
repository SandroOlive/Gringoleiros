var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("englishVerbs", { title: "english verbs page" });
  //res.send("admin tests conected");
});

module.exports = router;
