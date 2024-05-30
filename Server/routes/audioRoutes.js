const express = require('express');
const { upload, uploadAudio, getAllAudios } = require('../controllers/audioController');
const router = express.Router();

router.post('/upload', upload.single('audio'), uploadAudio);
router.get('/', getAllAudios);

module.exports = router;
