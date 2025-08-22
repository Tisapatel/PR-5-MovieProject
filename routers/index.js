// const express = require('express');
// const router = express.Router();

// // Import controllers for direct homepage
// const movieController = require('../controllers/movieController');

// // Import feature routers
// const authRouter = require('./authRouter');
// const movieRouter = require('./movieRouter');
// const showRouter = require('./showRouter');
// const userRouter = require('./userRouter');

// // Homepage route (dynamic movies)
// router.get('/', movieController.getHomePage);

// // Mount routers
// router.use('/', authRouter);      
// router.use('/movies', movieRouter);
// router.use('/shows', showRouter);
// router.use('/users', userRouter);

// module.exports = router;


const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');
const movieRouter = require('./movieRouter');
const authRouter = require('./authRouter');
const showRouter = require('./showRouter');
const userRouter = require('./userRouter');

// Homepage
router.get('/', movieController.getHomePage);

// Feature routes
router.use('/', movieRouter); 
router.use('/', authRouter);
router.use('/movies', movieRouter);
router.use('/shows', showRouter);
router.use('/users', userRouter);

module.exports = router;
