const pool = require('../db');

const addAlbum = async (req, res) => {
  const { title, artistId } = req.body;
  try {
    const result = await pool.query('INSERT INTO albums (title, artist_id) VALUES ($1, $2) RETURNING *', [title, artistId]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { addAlbum };
