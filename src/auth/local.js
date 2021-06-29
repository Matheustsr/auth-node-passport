const LocalStrategy = require("passport-http");
const User = require("./../model/user");

module.exports = (passport) => {
  passport.serializeUser((user, cb) => {
    return cb(null, user._id);
  });

  passport.deserializeUser((id, cb) => {
    User.findById(id)
      .then((user) => cb(null, user))
      .catch((err) => (err, {}));
  });
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      function (req, username, password, cb) {
        User.findOne({ username: username })
          .then((userExists) => {
            if (!userExists) {
              let user = new User(req.body);

              user.password = user.genHash(user.password);

              const { name, username, email, password } = req.body;

              return user
                .save({
                  name: name,
                  username: username,
                  email: email,
                  password: password,
                })
                .then((user) => {
                  return cb(null, user);
                })
                .catch((error) => {
                  console.log(error);
                  return;
                });
            }

            return cb(null, false);
          })
          .catch((err) => {
            return cb(err, false);
          });
      }
    )
  );
};
