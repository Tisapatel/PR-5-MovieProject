const Movie = require("../models/movieModel");

// Client: Home page (all movies)
exports.getHomePage = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });
    res.render("index", { movies });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// Client: Movie details page
exports.getMovieDetails = async (req, res) => {
  try {
    if (!req.params.id) return res.redirect("/");
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).send("Movie not found");
    res.render("pages/moviedetail", { movie });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
