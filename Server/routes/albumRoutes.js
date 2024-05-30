const express = require('express');
const { addAlbum } = require('../controllers/albumController');
const router = express.Router();

router.post('/', addAlbum);

module.exports = router;
