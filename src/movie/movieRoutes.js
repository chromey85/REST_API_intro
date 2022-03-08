const { Router } = require("express");
const { addMovie, listMovies, updateMovie, deleteOne } = require("./movieControllers");
const movieRouter = Router();

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.put("/movie/:title", updateMovie);
// movieRouter.delete("/movies", deleteOne);

module.exports = movieRouter;
