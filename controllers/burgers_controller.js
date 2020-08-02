const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    console.log("/");
    res.send("you hit the /!")
});


module.exports = router;