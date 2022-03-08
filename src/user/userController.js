const res = require("express/lib/response");
const req = require("express/lib/request");
const User = require("./userModel");

exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).send({ user: newUser.username });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
