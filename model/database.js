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
  "drop table if exists favourites; CREATE TABLE `favourites` ( `recipename` varchar(255) NOT NULL, `cuisineType` varchar(255) NOT NULL, `mealType` varchar(255) NOT NULL, `shareAs` varchar(255) NOT NULL, `image` varchar(255) NOT NULL, `id` INT NOT NULL AUTO_INCREMENT, `user_id` int NOT NULL, PRIMARY KEY (`id`)); drop table if exists users; CREATE TABLE `users` (`username` varchar(50) NOT NULL, `password` varchar(255) NOT NULL, `email` varchar(50) NOT NULL, `id` INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (`id`));"
  
  "ALTER TABLE `favourites` ADD CONSTRAINT `favourites_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)";

  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `favourites` was successful!");

    console.log("Closing...");
  });

  con.end();
});
