var express = require('express');
var router = express.Router();
const db = require("../model/helper");

  
  router.get("/", async (req, res) => {

    try {
      const results = await db("SELECT * FROM favourites ORDER BY id ASC;");
      res.send(results.data);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  router.post("/", async (req, res) => {
    
    try {
      const { recipename, cuisineType, mealType, shareAs, image } = req.body;
     
      //Schema from MySql table
      await db(`INSERT INTO favourites (recipename, cuisineType, mealType, shareAs, image) 
      VALUES ("${recipename}", "${cuisineType}", "${mealType}", "${shareAs}", "${image}");`);
      const results = await db("SELECT * FROM favourites ORDER BY id ASC");
  
      res.send(results.data);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  module.exports = router;