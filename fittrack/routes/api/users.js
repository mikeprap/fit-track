const router = require("express").Router();
const passport = require('passport');
const usersController = require("../../controllers/usersController");
const dietController = require("../../controllers/dietController")
const db = require("../../models")
// Matches with "/api/users"
router.route("/")
  .get(usersController.getUser);

/* Authentication Routes */
router.route("/register")
  .post(usersController.register);

router.route("/login")
.post(passport.authenticate('local', { failureRedirect: '/login' }),            usersController.login);

router.route("/logout")
  .get(usersController.logout);

router.route("/recipe")
  .post(usersController.newRecipe)
router.route("/recipe")
  .get(usersController.findAll)
 
  // db.Recipes.create(req.body).then(
  //   (response) => {
  //     res.json({succssful: response})
  //     console.log(response)
  //   }
  // ).catch(
  //   (err) => {
  //     res.json({error: err})
  //   }
  // )

  


// Matches with "/api/users/:id"

/* Testing Endpoint */
router
  .route("/ping")
  .get(usersController.test);

module.exports = router;