const mongoose = require('mongoose');
const User = mongoose.model('Users');

module.exports = (app) => {

  app.get("/users", (req, res) => {
    User.find({}, (err, users) => {
      console.log("userRoutes.js ReturnUsers: ", users);
      if (err) return res.send(err);
      res.send(users);
    });
  });

  app.post("/users", (req, res) => {
    let newUser = new User(req.body);

    newUser.save()
      .then(user => {
        res.send("user saved to Captain Code database");
      })
      .catch(err => {
        res.json({"unable to save to Captain Code database": err});
      });
  });
}