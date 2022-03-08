const req = require("express/lib/request");
const res = require("express/lib/response");
const Movie = require("./movieModel");

exports.addMovie = async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(200).send({ Movie: newMovie });
  } catch (error) {
    console.log(error, `You messed up with the creation`);
    res.status(500).send({ err: error.message });
  }
};

exports.listMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.status(200).send({ allMovie: movies });
  } catch (error) {
    console.log(error, `You messed up with the find`);
    res.status(500).send({ err: error.message });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    // const updateMovie = await Movie.updateOne({req.body},{title: newTitle});
    const filter = { title: req.params.title };
    const update = req.body;
    const options = { new: true };

    const updateMovie = await Movie.findOneAndUpdate(filter, update, options);
    updateMovie ? res.status(200).send({title: updateMovie}) : console.log(error, `You messed up with the update`);
  //   res.status(200).send({title: updateMovie});
  } catch (error) {
  //   console.log(error, `You messed up with the update`);
    res.status(500).send({ err: error.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const deleteMovie = await Movie.deleteOne({title: title})
    res.status(200).send({})
  } catch (error) {
    console.log(error, "It didn't Delete")
  }
};