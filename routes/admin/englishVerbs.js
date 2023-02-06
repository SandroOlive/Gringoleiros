var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("admin/englishVerbs", {
    title: "admin english verbs page",
  });
  //res.send("admin verbs conected");
});

module.exports = router;
