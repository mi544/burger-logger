const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "8073",
    database: "burgers_db"
});

connection.connect((err) => {
    if (err) throw err;

    // console.log(`Successfully connected as id ${connection.threadId}`);
});

module.exports = connection;