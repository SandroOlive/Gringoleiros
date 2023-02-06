var express = require("express");
//const { response, request } = require("../../../app");

var router = express.Router();

var database = require("../../../database");

router.get("/", function (request, response, next) {
  var query =
    "SELECT id, verb, verb_order, translation FROM portuguese_verbs ORDER BY verb_order DESC";

  database.query(query, (err, data) => {
    if (err) {
      throw err;
    }
    response.render("portuguese_verbs", {
      title: "Gringoleiros Admin",
      action: "list",
      verbsData: data,
      message: request.flash("success"),
    });
  });
});

router.get("/delete/:id", function (req, res, next) {
  const id = req.params.id;
  const query = `
  DELETE FROM portuguese_verbs WHERE id = "${id}"
  `;
  database.query(query, (err, data) => {
    if (err) {
      throw err;
    }
    req.flash("success", "User Deleted");
    res.redirect("/portuguese_verbs");
  });
});

module.exports = router;
