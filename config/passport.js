var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(
  new LocalStrategy(

    {
      usernameField: 'email' // not necessary, DEFAULT
    },
    function(username, password, done) {
      db.User.findOne({ email: username }, (err, user) => {
        if (err) {
          return done(err)
        }
        if (!user) {
          return done(null, false, { message: 'Incorrect username' })
        }
        if (!user.checkPassword(password)) {
          return done(null, false, { message: 'Incorrect password' })
        }
        return done(null, user)
      })
    }
    // // Our user will sign in using an email, rather than a "username"
    // {
    //   usernameField: "email",
    //   passwordField: "password"
    // },
    // function(user, password, done) {
    //   // When a user tries to sign in this code runs
    //   var criteria = user.indexOf("@") === -1 ? { username: user } : { email: user };
    //   // var criteria = { email: user };
    //   db.User.findOne({
    //     where: criteria
    //   }).then(function(dbUser) {
    //     // If there's no user with the given email
    //     if (!dbUser) {
    //       return done(null, false, {
    //         message: "Incorrect email."
    //       });
    //     }
    //     // If there is a user with the given email, but the password the user gives us is incorrect
     
    //     else if (!dbUser.checkPassword(password)) {
    //       return done(null, false, {
    //         message: "Incorrect password."
    //       });
    //     }
    //     // If none of the above, return the user
    //     return done(null, dbUser);
    //   });
    // }
  )
);

passport.serializeUser(function(user, done) {
  done(null,{ _id:user._id});
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
     done(err, user);
  });
});
// Exporting our configured passport
module.exports = passport;