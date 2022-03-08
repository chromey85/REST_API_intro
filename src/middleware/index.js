const bcrypt = require("bcryptjs");

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
