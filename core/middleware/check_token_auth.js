const jwt = require("jsonwebtoken");
require("dotenv").config(); 

const checkToken = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.header("Authorization").split(" ")[1];
      console.log(token)
      if (token) {
        const payload = await jwt.verify(token, process.env.SECRET);
        if (payload) {
          req.user = payload;
          next();
        } else {
          res.status(400).json({ error: "token verification failed" });
        }
      } else {
        res.status(400).json({ error: "malformed auth header" });
      }
    } else {
      res.status(400).json({ error: "No authorization header" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = checkToken;