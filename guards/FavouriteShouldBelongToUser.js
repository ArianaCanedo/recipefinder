var db = require("../model/helper");


const favouriteShouldBelongToUser = async (req, res, next)  => {

    const { id } = req.params;
    try {
        //find if there is an offer with that ID in the DB
        const results = await db(
          `SELECT * FROM favourites WHERE id = "${id}";`);
          if(results.data[0].user_id !== req.user_id)
        //If user id and the favourites user_id are not a match
          return res.status(404).send({ message: "Not your favourite"});
          req.offer = results.data;
        }catch (err) {
            res.status(500).send(err);
      } next();
}

module.exports = favouriteShouldBelongToUser;