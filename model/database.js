require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "recipes",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "drop table if exists favourites; CREATE TABLE `favourites` (`recipename` VARCHAR(255) NOT NULL,`cuisineType` VARCHAR(255) NOT NULL,`mealType` VARCHAR(255) NOT NULL,`id` INT NOT NULL AUTO_INCREMENT,PRIMARY KEY (`id`));";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `students` was successful!");

    console.log("Closing...");
  });

  con.end();
});
