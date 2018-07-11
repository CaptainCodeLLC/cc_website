const mongoose = require('mongoose');
const Email = mongoose.model('Emails');

module.exports = (app) => {

  app.get("/emails", (req, res) => {
    Email.find({}, (err, users) => {
      console.log("emailRoutes.js Return Emails: ", emails);
      if (err) return res.send(err);
      res.send(emails);
    });
  });

  app.post("/emails", (req, res) => {
    let newEmail = new Email(req.body);

    newEmail.save()
      .then(email => {
        res.send("Email saved to Captain Code database");
      })
      .catch(err => {
        res.json({
          "unable to save email to Captain Code database": err
        });
      });
  });
}