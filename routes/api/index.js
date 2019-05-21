const router = require("express").Router();
const userRoutes = require("./user");
const storeRoutes = require("./store");
const eventRoutes = require("./event");
const passport = require("passport");

// Api routes
router.use("/user", userRoutes);
router.use("/store", storeRoutes);
router.use("/event", eventRoutes);

router.route("/login").post(
    function (req, res, next) {
       console.log('routes/user.js, login, req.body: ');
       console.log(req.body)
       next()
   },
   passport.authenticate('local'),
   function (req, res) {
       console.log('logged in', req.user);
   
       var userInfo = {
           email: req.user.email
       };
   
       res.send(userInfo);
   }
 )

 router.route("/loggedin").get(function(req, res, next){
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

module.exports = router;