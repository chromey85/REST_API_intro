const { Router } = require("express");
const { addUser, deleteUser, editUser } = require("./userController");
const { hashPassword } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
// userRouter.delete("/user", hashPassword, addUser);
// userRouter.patch("/user", hashPassword, addUser);

module.exports = userRouter;
