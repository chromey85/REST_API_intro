const { Router } = require("express");
const { addMovie, listMovies, updateOne, deleteOne } = require("./movieControllers");
const movieRouter = Router();

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
// movieRouter.patch("/movie", updateOne);
// movieRouter.delete("/movies", deleteOne);

module.exports = movieRouter;
