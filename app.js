const express = require("express");
const indexRouter = require("./routes/indexRouter");
const formRouter = require("./routes/formRouter");
const path = require("node:path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", formRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
