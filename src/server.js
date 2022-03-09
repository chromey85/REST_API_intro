require("./db/connections");
const express = require("express");
const movieRouter = require("./movie/movieRoutes");
const userRouter = require("./user/userRoutes");
const app = express();
const port = 5000;

app.use(express.json());
app.use(movieRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`listening in ${port}`);
});
