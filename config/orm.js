var connection = require("../config/connection.js");

// SQL function statements
var orm = {
    //select all burgers
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //insert a new burger
    insertOne: function (table, burger_name, devoured, cb) {
        var queryString = "INSERT INTO ?? VALUES (id, ??, ??);";
        connection.query(queryString, [table, burger_name, devoured], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //update a burgers devoured status
    update: function (table, devoured, id, cb) {
        var queryString = "UPDATE ?? SET Devoured ? WHERE ID= ?;";
        connection.query(queryString, [table, devoured, id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

// Export the orm object
module.exports = orm;
