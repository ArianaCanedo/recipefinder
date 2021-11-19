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
  "drop table if exists favourites; CREATE TABLE `favourites` (`recipename` VARCHAR(255) NOT NULL,`cuisineType` VARCHAR(255) NOT NULL,`mealType` VARCHAR(255) NOT NULL, shareAs VARCHAR(255) NOT NULL, image VARCHAR(255) NOT NULL, `id` INT NOT NULL AUTO_INCREMENT,PRIMARY KEY (`id`)); drop table if exists users; CREATE TABLE `users` (`username` VARCHAR(50) NOT NULL,`password` VARCHAR(255) NOT NULL,`email` VARCHAR(50) NOT NULL, `id` INT NOT NULL AUTO_INCREMENT,PRIMARY KEY (`id`)); drop table if exists favourites_to_users; CREATE TABLE `favourites_to_users` (`id_favourites` INT NOT NULL,`id_users` INT NOT NULL, `id` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (`id`))";
  
  "ALTER TABLE `favourites_to_users` ADD CONSTRAINT `favourites_to_users_fk0` FOREIGN KEY (`id_favourites`) REFERENCES `favourites`(`id`)";
  
  "ALTER TABLE `favourites_to_users` ADD CONSTRAINT `favourites_to_users_fk1` FOREIGN KEY (`id_users`) REFERENCES `users`(`id`)";
  
  
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `favourites` was successful!");

    console.log("Closing...");
  });

  con.end();
});
