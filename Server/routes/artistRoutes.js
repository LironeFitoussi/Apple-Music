const express = require('express');
const { addArtist, getArtists } = require('../controllers/artistController');
const router = express.Router();

router.post('/', addArtist);
router.get('/', getArtists)

module.exports = router;
