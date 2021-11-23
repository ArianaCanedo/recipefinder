var express = require("express");
const userShouldBeLoggedIn = require("../guards/UserShouldBeLoggedIn");
const favouriteShouldBelongToUser = require("../guards/FavouriteShouldBelongToUser");
var router = express.Router();
const db = require("../model/helper");

router.get("/", userShouldBeLoggedIn, async (req, res) => {
  //to get recipes selecting from database

  try {
    const results = await db(
      `SELECT * FROM favourites WHERE user_id="${req.user_id}";`
    );
    
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/", userShouldBeLoggedIn, async (req, res) => {
  // to post recipes which are saved as my favourites
  try {
    const { recipename, cuisineType, mealType, shareAs, image } = req.body;

    //Schema from MySql table
    await db(`INSERT INTO favourites (recipename, cuisineType, mealType, shareAs, image, user_id) 
      VALUES ("${recipename}", "${cuisineType}", "${mealType}", "${shareAs}", "${image}", ${req.user_id});`);

    res.send({ message: "Favourite was added" });
  } catch (err) {
    res.status(500).send(err);
  }
});

////DELETE a favourite

router.delete("/:id", [userShouldBeLoggedIn, favouriteShouldBelongToUser], async (req, res) => {
  const{id} = req.params
    try {
      await db(`DELETE FROM favourites WHERE id= "${id}";`);
      const results = await db(`SELECT * FROM favourites WHERE user_id = "${req.user_id}";`);
      res.status(201).send(results.data);
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = router;
