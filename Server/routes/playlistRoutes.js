const express = require('express');
const { addPlaylist } = require('../controllers/playlistController');
const router = express.Router();

router.post('/', addPlaylist);

module.exports = router;
