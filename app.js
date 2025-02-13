const express = require("express");
const indexRouter = require("./routes/indexRouter");
const formRouter = require("./routes/formRouter");
const detailsRouter = require("./routes/detailsRouter");
const path = require("node:path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", formRouter);
app.use("/details", detailsRouter);

app.use((req, res, next) => {
  res.status(404);
  res.render("404", { message: "The page you're looking for doesn't exist." });
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500);
  res.render("404", { message: err.message });
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
