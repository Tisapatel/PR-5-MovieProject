const express = require('express');
const router = express.Router();
const adminController = require('./adminController'); // We'll create this next
const upload = require('../config/multerConfig'); // For image uploads

// Admin Dashboard
router.get('/', adminController.getDashboard);

// Movie Management
router.get('/movies', adminController.getMovies);
router.get('/movies/add', adminController.addMovieForm);
router.post('/movies/add', upload.fields([{ name: 'bannerImage', maxCount: 1 }, { name: 'posterImage', maxCount: 1 }]), adminController.addMovie);
router.get('/movies/edit/:id', adminController.editMovieForm);
router.post('/movies/edit/:id', upload.fields([{ name: 'bannerImage', maxCount: 1 }, { name: 'posterImage', maxCount: 1 }]), adminController.updateMovie);
router.post('/movies/delete/:id', adminController.deleteMovie);

module.exports = router;
