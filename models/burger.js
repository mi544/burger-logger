const orm = require("../config/orm");

const burger = {
    showBurgers: (cb) => {
        orm.selectAll("burgers", (data) => {
            cb(data);
        });
    },

    addBurger: (insertData, cb) => {
        orm.insertOne("burgers", insertData, (result) => {
            cb(result);
        })
    },

    updateBurger: (updateData, condition, cb) => {
        orm.updateOne("burgers", updateData, condition, (result) => {
            cb(result);
        })
    }
};

module.exports = burger;