require("./db/connections");
const express = require("express");
const movieRouter = require("./movie/movieRoutes");
const app = express();
const port = 5000;

app.use(express.json());
app.use(movieRouter);

app.listen(port, () => {
  console.log(`listening in ${port}`);
});
