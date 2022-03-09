const { Router } = require("express");
const {
  addUser,
  login,
  deleteUser,
  editUser,
  updatePassword,
  listUser,
} = require("./userController");
const { hashPassword, decryptPassword, checkToken } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/login", decryptPassword, login);
// userRouter.get("/user", checkToken, login);
userRouter.get("/user", listUser);
userRouter.patch("/user", hashPassword, checkToken, updatePassword);
userRouter.delete("/user/:filterKey/:filterVal", deleteUser);

// userRouter.delete("/user", hashPassword, deleteUser);
// userRouter.patch("/user", hashPassword, addUser);

module.exports = userRouter;
