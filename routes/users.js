var express = require("express");
var router = express.Router();
var db = require("../model/helper");
require("dotenv").config();
var bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");
const userShouldBeLoggedIn = require("../guards/UserShouldBeLoggedIn");

const supersecret = process.env.SUPER_SECRET;

/* GET users listing. */
router.get("/", async (req, res) => {
  try {
    const results = await db("SELECT * FROM users");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/register", async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const hash = await bcrypt.hash(password, saltRounds);

    await db(
      `INSERT INTO users (username, password, email) VALUES ("${username}", "${hash}", "${email}")`
    );

    res.send({ message: "Register successful" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// USER LOGIN
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("req body", req.body);
  try {
    const results = await db(
      `SELECT * FROM users WHERE username = "${username}"`
    );
    const user = results.data[0];
    if (user) {
      const user_id = user.id;

      const correctPassword = await bcrypt.compare(password, user.password);

      if (!correctPassword) throw new Error("Incorrect password");

      //create a new token with the username and the id
      var token = jwt.sign({ user_id }, supersecret);
      res.send({ message: "Login successful, here is your token", token });
      console.log(token);
    } else {
      throw new Error("User does not exist");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.get("/favourites", userShouldBeLoggedIn, async (req, res) => {
  res.send({ message: "Here is the protected data for user" + req.user.id });
});


module.exports = router;
