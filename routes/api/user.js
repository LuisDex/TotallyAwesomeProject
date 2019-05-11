const router = require("express").Router();
const userController = require("../../controllers/userController");
// const passport = require("passport");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

// Matches with "/api/user/:username"
router.route("/:username")
.get(userController.findOne);

// router.route("/login").post(
//    function (req, res, next) {
//       console.log('routes/user.js, login, req.body: ');
//       console.log(req.body)
//       next()
//   },
//   passport.authenticate('local'),
//   (req, res) => {
//       console.log('logged in', req.user);
//       var userInfo = {
//           email: req.user.email
//       };
//       res.send(userInfo);
//   }
// )
module.exports = router;