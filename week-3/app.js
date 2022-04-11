const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.set("view engine", "pug");

const mainRoutes = require("./routes");
const getDataRoutes = require("./routes/get_data");

app.use(mainRoutes);
app.use("/getData", getDataRoutes);

app.listen(3000, () => {
    console.log("The application is running on the localhost:3000!")
});