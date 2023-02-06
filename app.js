/*
//port
//const port = 3000;
//app.listen(port, () => console.info(`App listening to port ${port}`));
*/

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const expressLayouts = require("express-ejs-layouts");

const session = require("express-session");
const flash = require("connect-flash");

//view part
const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");
const exercisesRouter = require("./routes/exercises");
const phrasesRouter = require("./routes/phrases");
const profileRouter = require("./routes/profile");
const testsRouter = require("./routes/tests");
const englishVerbsRouter = require("./routes/englishVerbs/englishVerbs");
const portugueseVerbsRouter = require("./routes/portuguese_verbs");

//Admin View Part

const adminExercisesRouter = require("./routes/admin/exercises");
const adminHomeRouter = require("./routes/admin/home");
//console.log(adminHomeRouter);
const adminPhrasesRouter = require("./routes/admin/phrases");
const adminTestsRouter = require("./routes/admin/tests");
const adminUsersRouter = require("./routes/admin/users");
const adminEnglishVerbsRouter = require("./routes/admin/englishVerbs");

const adminPortugueseVerbsRouter = require("./routes/admin/portuguese_verbs");
//const adminPortugueseVerbsAddRouter = require("./routes/admin/portugueseVerbs/portugueseVerbsAdd");
//const adminPortugueseVerbsEditRouter = require("./routes/admin/portugueseVerbs/portugueseVerbsEdit");
//const adminPortugueseVerbsDeleteRouter = require("./routes/admin/portugueseVerbs/portugueseVerbsDelete");
const app = express();
// view engine setup
app.set("layout", "./layouts/layout");
//remember to create one for admin section
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(expressLayouts);

app.use(
  session({
    secret: "weblesson",
    cookie: { maxAge: 60000 },
    saveUninitialized: false,
    resave: false,
  })
);

app.use(flash());

//Navigation
app.use("/", indexRouter);
app.use("/login", loginRouter);
app.use("/englishVerbs", englishVerbsRouter);
//have a bug here when i change the portugueseVerbs inside the folder
app.use("/portuguese_verbs", portugueseVerbsRouter);
app.use("/exercises", exercisesRouter);
app.use("/phrases", phrasesRouter);
app.use("/profile", profileRouter);
app.use("/tests", testsRouter);

//Admin Navigation
app.use("/admin/", adminExercisesRouter);
app.use("/admin/", adminHomeRouter);
app.use("/admin/", adminPhrasesRouter);
app.use("/admin/", adminTestsRouter);
app.use("/admin/", adminUsersRouter);
app.use("/admin/", adminEnglishVerbsRouter);
app.use("/admin/", adminPortugueseVerbsRouter);

//Layouts
app.get("", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login", { layout: "./layouts/layout" });
});
app.get("/phrases", (req, res) => {
  res.render("phrases", { layout: "./layouts/layout" });
});
app.get("/profile", (req, res) => {
  res.render("profile", { layout: "./layouts/layout" });
});
app.get("/tests", (req, res) => {
  res.render("tests", { layout: "./layouts/layout" });
});
app.get("/exercises", (req, res) => {
  res.render("exercises", { layout: "./layouts/layout" });
});
app.get("/english_verbs", (req, res) => {
  res.render("englishVerbs", { layout: "./layouts/layout" });
});
app.get("/portuguese_verbs", (req, res) => {
  res.render("portuguese_verbs", { layout: "./layouts/layout" });
});

//Admin Layouts
app.get("/admin/home", (req, res) => {
  res.render("admin/home", { layout: "./layouts/adminlayout" });
});
app.get("/admin/exercises", (req, res) => {
  res.render("admin/exercises", { layout: "./layouts/adminlayout" });
});
app.get("/admin/phrases", (req, res) => {
  res.render("admin/phrases", { layout: "./layouts/adminlayout" });
});
app.get("/admin/tests", (req, res) => {
  res.render("admin/tests", { layout: "./layouts/adminlayout" });
});
app.get("/admin/users", (req, res) => {
  res.render("admin/users", { layout: "./layouts/adminlayout" });
});
app.get("/admin/englishVerbs", (req, res) => {
  res.render("admin/englishVerbs", { layout: "./layouts/adminlayout" });
});
app.get("/admin/portuguese_verbs", (req, res) => {
  res.render("admin/portuguese_verbs", {
    layout: "./layouts/adminlayout",
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
