const connection = require("./connection");

class ORM {
    constructor(connection) {
        this.connection = connection;
    }

    selectAll(table, cb) {
        connection.query("SELECT * FROM ??", table, (err, data) => {
            if (err) throw err;
            return cb(data);
        });
    }

    insertOne(table, insertData, cb) {
        connection.query("INSERT INTO ?? SET ?", [table, insertData], (err, result) => {
            if (err) throw err;
            return cb(result);
        });
    }

    updateOne(table, updateData, condition, cb) {
        connection.query("UPDATE ?? as t1 SET ? WHERE ?", [table, updateData, condition], (err, result) => {
            if (err) throw err;
            return cb(result);
        });
    }

    endConnection() {
        connection.end();
    }
}

module.exports = new ORM(connection);