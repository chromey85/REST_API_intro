const req = require("express/lib/request");
const res = require("express/lib/response");
const { findOneAndDelete, deleteOne } = require("./movieModel");
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
    // const filter = { title: req.params.title };
    // const update = req.body;
    // const options = { new: true };

    // const updateMovie = await Movie.findOneAndUpdate(filter, update, options);

    const updateMovie = await Movie.updateOne(
      { [req.body.filterKey]: req.body.filterVal },
      { [req.body.updateKey]: req.body.updateVal }
    );
    if (updateMovie.modifiedCount > 0) {
      res.status(200).send({ msg: "Successfully updated Movie" });
    } else {
      throw new Error("You messed up with the update");
    }
    // updateMovie
    //   ? res.status(200).send({ title: updateMovie })
    //   : console.log(error, `You messed up with the update`);
    //   res.status(200).send({title: updateMovie});
  } catch (error) {
    //   console.log(error, `You messed up with the update`);
    res.status(500).send({ err: error.message });
  }
};

// exports.deleteMovie = async (req, res) => {
//   // console.log(req, "1");
//   // console.log(res, "1.1");
//   try {
//     const deleteMovie = await Movie.deleteOne({
//       title: req.params.title,
//     });
//     console.log(deleteOne, "2");
//     res.status(200).send({ title: deleteMovie });
//     // console.log(deleteOne, "3");
//   } catch (error) {
//     console.log(error, "It didn't Delete");
//   }
// };

exports.deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await Movie.deleteOne({
      [req.params.filterKey]: req.params.filterVal,
    });
    if (deletedMovie.deletedCount > 0) {
      res.status(200).send({ msg: "Successfully deleted movie" });
    } else {
      throw new Error("Did not delete");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
