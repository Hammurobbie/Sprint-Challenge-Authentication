const router = require("express").Router();

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const authModel = require("./auth-model");

router.post("/register", (req, res) => {
  // implement registration
  const hash = bcrypt.hashSync(req.body.password, 16);

  req.body.password = hash;

  if (req.body.username && req.body.password) {
    authModel
      .add(req.body)
      .then(() =>
        res.status(200).json({ message: "User successfully created." })
      )
      .catch(() =>
        res.status(400).json({ error: "User could not be created." })
      );
  } else {
    res.status(401).json({ message: "Username and password required" });
  }
});

router.post("/login", (req, res) => {
  // implement login

  const generateToken = user => {
    const payload = {
      subject: user.id,
      username: user.username
    };

    const secret = "Tell me something to believe in";

    const options = { expiresIn: "3hr" };

    return jwt.sign(payload, secret, options);
  };

  authModel
    .findBy(req.body.username)
    .then(usr => {
      console.log(usr);
      if (usr && bcrypt.compareSync(req.body.password, usr[0].password)) {
        req.session.user = req.body.username;
        const token = generateToken(usr);
        req.session.token = token;
        res.status(200).json({
          message: `Welcome, ${usr[0].username}!`,
          token
        });
      } else {
        res.status(400).json({ message: "Invalid username/password" });
      }
    })
    .catch(() =>
      res.status(400).json({ message: "User could not be retrieved" })
    );
});

router.get("/users", (req, res) => {
  authModel
    .find()
    .then(resp => {
      console.log(resp);
      res.status(200).json(resp);
    })
    .catch(() =>
      res.status(400).json({ error: "Users could not be retrieved." })
    );
});

module.exports = router;
