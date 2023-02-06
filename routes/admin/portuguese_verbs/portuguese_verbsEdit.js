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

router.get("/edit/:id", function (req, res, next) {
  var id = req.params.id;

  var query = `SELECT * FROM portuguese_verbs WHERE id = "${id}"`;
  database.query(query, function (err, data) {
    console.log(query);
    res.render("portuguese_verbs", {
      title: "Edit Verbs",
      action: "edit",
      verbsData: data[0],
    });
  });
});

router.post("/edit/:id", function (request, response, next) {
  const id = request.params.id;
  const verb = request.body.verb;
  const verb_order = request.body.verb_order;
  const translation = request.body.translation;
  const notes = request.body.notes;
  const present_eu = request.body.present_eu;
  const present_voce = request.body.present_voce;
  const present_nos = request.body.present_nos;
  const present_eles = request.body.present_eles;
  const past_eu = request.body.past_eu;
  const past_voce = request.body.past_voce;
  const past_nos = request.body.past_nos;
  const past_eles = request.body.past_eles;
  const imperfect_eu = request.body.imperfect_eu;
  const imperfect_voce = request.body.imperfect_voce;
  const imperfect_nos = request.body.imperfect_nos;
  const imperfect_eles = request.body.imperfect_eles;
  const future_eu = request.body.future_eu;
  const future_voce = request.body.future_voce;
  const future_nos = request.body.future_nos;
  const future_eles = request.body.future_eles;
  const future_past_eu = request.body.future_past_eu;
  const future_past_voce = request.body.future_past_voce;
  const future_past_nos = request.body.future_past_nos;
  const future_past_eles = request.body.future_past_eles;
  const query = `
  UPDATE verbs
  SET 
  verb = "${verb}",
  verb_order = "${verb_order}",
  translation = "${translation}",
  notes = "${notes}",
  present_eu = "${present_eu}",
  present_voce = "${present_voce}",
  present_nos = "${present_nos}",
  present_eles = "${present_eles}",
  past_eu = "${past_eu}",
  past_voce = "${past_voce}",
  past_nos = "${past_nos}",
  past_eles = "${past_eles}",
  imperfect_eu = "${imperfect_eu}",
  imperfect_voce = "${imperfect_voce}",
  imperfect_nos = "${imperfect_nos}",
  imperfect_eles = "${imperfect_eles}",
  future_eu = "${future_eu}",
  future_voce = "${future_voce}",
  future_nos = "${future_nos}",
  future_eles = "${future_eles}",
  future_past_eu = "${future_past_eu}",
  future_past_voce = "${future_past_voce}",
  future_past_nos = "${future_past_nos}",
  future_past_eles = "${future_past_eles}"
  WHERE id = "${id}"
  `;
  database.query(query, (error, data) => {
    console.log(query);
    if (error) {
      throw error;
    }
    request.flash("success", "verbs Updated");
    response.redirect("/portuguese_verbs");
  });
});

module.exports = router;
