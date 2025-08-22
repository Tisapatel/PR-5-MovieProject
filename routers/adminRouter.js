const express = require("express");
const Movie = require("../models/movieModel");
const upload = require("../middlewares/upload");
const router = express.Router();

// ---------------- DASHBOARD ----------------
router.get("/", async (req, res) => {
    const movies = await Movie.find().sort({ _id: -1 }).limit(8);
    const moviesCount = await Movie.countDocuments();
    const premiereCount = await Movie.countDocuments({ category: "premiere" });
    const recommendedCount = await Movie.countDocuments({ category: "recommended" });

    res.render("admin/dashboard", {
        layout: "admin/layout",
        movies,
        moviesCount,
        premiereCount,
        recommendedCount,
        title: "Dashboard",
        activePage: "dashboard" 
    });
});




// ---------------- MANAGE MOVIES ----------------
router.get("/movies", async (req, res) => {
    try {
        const movies = await Movie.find();
        res.render("admin/movies", { layout: "admin/layout", movies, title: "Manage Movies", activePage: "movies" });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

// ---------------- ADD MOVIE ----------------
router.get("/add-movie", (req, res) => {
    res.render("admin/add-movie", { layout: "admin/layout", title: "Add Movie" ,movie: {}});
});

router.post(
  "/add-movie",
  upload.fields([
    { name: "posterImage", maxCount: 1 },
    { name: "bannerImage", maxCount: 1 }
  ]),
  async (req, res) => {
    try {
      const { title, language, genre, category } = req.body;
      const posterImage = req.files.posterImage ? `/uploads/${req.files.posterImage[0].filename}` : "";
      const bannerImage = req.files.bannerImage ? `/uploads/${req.files.bannerImage[0].filename}` : "";

      await Movie.create({ title, language, genre, category, posterImage, bannerImage });
      res.redirect("/admin/movies");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error adding movie");
    }
  }
);


// ---------------- EDIT MOVIE ----------------
router.get("/edit-movie/:id", async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).send("Movie not found");
        res.render("admin/edit-movie", { layout: "admin/layout", movie, title: "Edit Movie" });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading movie");
    }
});

// Handle movie update
router.post(
  "/edit-movie/:id",
  upload.fields([
    { name: "posterImage", maxCount: 1 },
    { name: "bannerImage", maxCount: 1 }
  ]),
  async (req, res) => {
    try {
      const { title, language, genre, category } = req.body;
      const updateData = { title, language, genre, category };

      if (req.files.posterImage) {
        updateData.posterImage = `/uploads/${req.files.posterImage[0].filename}`;
      }
      if (req.files.bannerImage) {
        updateData.bannerImage = `/uploads/${req.files.bannerImage[0].filename}`;
      }

      await Movie.findByIdAndUpdate(req.params.id, updateData);
      res.redirect("/admin/movies");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error updating movie");
    }
  }
);



// ---------------- DELETE MOVIE ----------------
router.post("/delete-movie/:id", async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.redirect("/admin/movies");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting movie");
    }
});

module.exports = router;
