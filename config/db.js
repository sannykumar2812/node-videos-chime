
var mysql = require("mysql2")


var con = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE

});

con.connect(function (err) {
    if (!err) {
        console.log(" Database connection succesfully..!!");
    } else {
        console.log(err)
    }

});

module.exports = con;




