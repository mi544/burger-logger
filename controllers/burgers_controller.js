const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    burger.showBurgers((data) => {
        res.render("index", {
            items: data
        });
    })
});

router.post("/api/burgers", (req, res) => {
    burger.addBurger(req.body, (result) => {
        if (!result.affectedRows) {
            res.status(500).end();
        } else {
            res.json({
                id: result.insertId
            })
        }
    })
});

router.put("/api/burgers/:id", (req, res) => {
    const {
        id
    } = req.params;
    burger.updateBurger(req.body, {
            id
        },
        (result) => {
            if (!result.changedRows) {
                res.status(404).end();
            } else {
                res.end();
            }
        }
    )
});

router.delete("/api/burgers/:id", (req, res) => {
    burger.deleteBurger({
        id: req.params.id
    }, result => {
        if (!result.affectedRows) {
            res.status(404).end();
        } else {
            res.end();
        }
    })
});

module.exports = router;