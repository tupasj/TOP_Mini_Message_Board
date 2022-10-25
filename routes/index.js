const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// Routes
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

// Post a new message. Triggered by form submitting to '/new'.
router.post("/new", function (req, res) {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });
  console.log('pushed messages');
  res.redirect("/");
});

module.exports = router;