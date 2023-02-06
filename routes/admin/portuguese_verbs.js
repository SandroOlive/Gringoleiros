const express = require("express");
const { response, request } = require("../../app");
const router = express.Router();
var database = require("../../database");

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

//Chose By Letter
router.get(
  "/portuguese_verbs/byLetter/:letter",
  function (request, response, next) {
    const alpha = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    var letter = req.params.letter;
    let adjLetter = letter.toUpperCase();

    if (!alpha.includes(adjLetter)) {
      adjLetter = "A";
    }

    var query =
      "SELECT id, verb, verb_order, translation FROM portuguese_verbs WHERE LOWER(portuguese_verbs.verb) LIKE 'a%' ORDER BY verb_order DESC";

    database.query(query, (err, data) => {
      if (err) {
        throw err;
      }
      response.render("portuguese_verbs", {
        title: "Gringoleiros Admin",
        action: "letter",
        verbsData: data,
        message: request.flash("success"),
      });
    });
  }
);

//Button on the first page to add the information about the verb
//this is correct don`t change
router.get("/add", function (request, response, next) {
  response.render("portuguese_verbs", {
    title: "Add verbs",
    action: "add",
  });
});

router.post("/add_portuguese_verbs", function (request, response, next) {
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
              "${verb_order}",
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
  database.query(query, (err, data) => {
    if (err) {
      throw err;
    }
    request.flash("success", "Verb Inserted");
    response.redirect("/portuguese_verbs");
  });
});

//editing a verb
router.get("/edit/:id", function (req, res, next) {
  var id = req.params.id;

  var query = `SELECT * FROM portuguese_verbs WHERE id = "${id}"`;
  database.query(query, function (err, data) {
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
  UPDATE portuguese_verbs
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
    if (error) {
      throw error;
    }
    request.flash("success", "Portuguese verbs Updated");
    response.redirect("/portuguese_verbs");
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
    req.flash("success", `Portuguese ${id} Deleted`);
    // latter change this to show the name of the verb not the id
    res.redirect("/portuguese_verbs");
  });
});

module.exports = router;
