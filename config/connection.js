/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/
var mysql = require('mysql');
var connection;
connection = mysql.createConnection(process.env.JAWSDB_URL);
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});
module.exports = connection;
