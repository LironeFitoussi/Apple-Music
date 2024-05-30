const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const pool = require('../db');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadAudio = async (req, res) => {
  const { title, artistId, albumId, playlistId } = req.body;
  const file = req.file;

  try {
    const result = await cloudinary.uploader.upload_stream(
      { resource_type: 'video' },
      (error, result) => {
        if (error) {
          return res.status(500).send(error);
        }

        const audioUrl = result.secure_url;

        pool.query(
          'INSERT INTO audios (title, artist_id, album_id, playlist_id, url) VALUES ($1, $2, $3, $4, $5) RETURNING *',
          [title, artistId, albumId, playlistId, audioUrl],
          (err, dbRes) => {
            if (err) {
              return res.status(500).send(err);
            }

            res.status(201).json(dbRes.rows[0]);
          }
        );
      }
    );

    file.stream.pipe(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getAllAudios = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM audios');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  upload,
  uploadAudio,
  getAllAudios
};
