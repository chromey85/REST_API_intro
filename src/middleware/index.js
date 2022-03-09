const bcrypt = require("bcryptjs");
const { jwt } = require("jsonwebtoken");
const User = require("../user/userModel");

exports.hashPassword = async (req, res, next) => {
  try {
    // const pass = await req.body.pass;
    // const hashedPass = bcrypt.hash(pass, 8);
    // req.body.pass = hashedPass;
    req.body.password = await bcrypt.hash(req.body.password, 8);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.decryptPassword = async (req, res, next) => {
  try {
    req.user = await User.findOne({ username: req.body.username });
    if (await bcrypt.compare(req.body.password, req.user.password)) {
      next();
    } else {
      throw new Error("incorrect Credentials");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.checkToken = async (req, res, next) => {
  try {
    // const authHeader = req.header("Authorization");
    // const token = authHeader.replace("Bearer ", "");
    // const authHeader = req.header("Authorization").replace("Bearer ", "");
    const decodedToken = await jwt.verify(
      req.header("Authorization").replace("Bearer ", ""),
      process.env.SECRET
    );
    req.user = await User.findById(decodedToken._id);
    if (req.user) {
      next();
    } else {
      throw new Error("No User Found");
    }
    // console.log(authHeader);
    // console.log(token);
    // console.log(decodedToken);
    // console.log(user);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
