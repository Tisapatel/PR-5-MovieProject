
const express = require("express");
const Movie = require("../models/movieModel");
const router = express.Router();

// Home page
router.get("/", async (req, res) => {
    try {
        const movies = await Movie.find(); // All movies
        const recommendedMovies = movies.filter(m => m.category === "recommended");
        const premiereMovies = movies.filter(m => m.category === "premiere");
        const musicStudio = movies.filter(m => m.category === "music");
        const outdoorEvents = movies.filter(m => m.category === "outdoor");
        const popularEvents = movies.filter(m => m.category === "popular");

        res.render("index", {
            movies,                // <-- All movies for your movie-grid
            recommendedMovies,
            premiereMovies,
            musicStudio,
            outdoorEvents,
            popularEvents,
            layout: "layout",
            title: "Home"
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});


// Movie details
// Movie details
router.get("/movie-details/:id", async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).send("Movie not found");
        res.render("pages/movie-details", { 
            movie,
            layout: "layout",
            title: movie.title
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading movie");
    }
});


module.exports = router;
