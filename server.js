const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({
    helpers: {
        isMarksBurger: function (value) {
            return value === "Mark Gire's special burger"
        }
    },
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(require("./controllers/burgers_controller"));

app.listen(PORT, err => {
    if (err) throw err;
    console.log(`Listening on localhost:${PORT}`);
});