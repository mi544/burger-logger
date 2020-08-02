const mysql = require("mysql");
const {
    connect
} = require("../controllers/burgers_controller");
let connection;
if (process.env.JAWSDBURLURL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    const connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "8073",
        database: "burgers_db"
    });
}
connection.connect((err) => {
    if (err) throw err;

    // console.log(`Successfully connected as id ${connection.threadId}`);
});

module.exports = connection;