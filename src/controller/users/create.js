const User = require("./../../model/user");

module.exports = (req, res) => {
  let user = new User(req.body);

  user.password = user.genHash(user.password)

  const { name, username, email, password } = req.body;

  user
    .save({
        name: name,
        username: username,
        email: email,
        password: password,
    })
    .then((user) => {
      return res.redirect("/users");
    })
    .catch((error) => {
      console.log(error);
      return;
    });
};
