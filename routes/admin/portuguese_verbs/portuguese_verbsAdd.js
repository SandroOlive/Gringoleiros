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

router.get("/add", function (request, response, next) {
  response.render("portuguese_verbs", {
    title: "Add verbs",
    action: "add",
  });
});

router.post("/add_verbs", function (request, response, next) {
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
          INSERT INTO portuguese_verbs
            (
              verb, 
              verb_order,
              translation, 
              notes, 
              present_eu, 
              present_voce, 
              present_nos,
              present_eles,
              past_eu,
              past_voce,
              past_nos,
              past_eles,
              imperfect_eu,
              imperfect_voce,
              imperfect_nos,
              imperfect_eles,
              future_eu,
              future_voce,
              future_nos,
              future_eles,
              future_past_eu,
              future_past_voce,
              future_past_nos,
              future_past_eles
            ) 
          VALUES 
            (
              "${verb}",
              ${verb_order},
              "${translation}",
              "${notes}",
              "${present_eu}",
              "${present_voce}",
              "${present_nos}",
              "${present_eles}",
              "${past_eu}",
              "${past_voce}",
              "${past_nos}",
              "${past_eles}",
              "${imperfect_eu}",
              "${imperfect_voce}",
              "${imperfect_nos}",
              "${imperfect_eles}",
              "${future_eu}",
              "${future_voce}",
              "${future_nos}",
              "${future_eles}",
              "${future_past_eu}",
              "${future_past_voce}",
              "${future_past_nos}",
              "${future_past_eles}"
            )`;
  console.log(query);
  database.query(query, (err, data) => {
    if (err) {
      throw err;
    }
    request.flash("success", "Verb Inserted");
    response.redirect("/portuguese_verbs");
  });
});

module.exports = router;
