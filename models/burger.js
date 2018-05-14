var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (results) {
            cb(results);
        })
    },
    insertOne: function (burger_name, devoured, cb) {
        orm.insertOne("burgers", burger_name, devoured, cb, function (results) {
            cb(results);
        })
    },
    updateOne: function (id, devoured, cb) {
        orm.updateOne("burgers", id, devoured, function (result) {
            cb(result);
        })
    }
};
module.exports = burger;
