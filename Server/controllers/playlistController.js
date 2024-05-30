const pool = require('../db');

const addPlaylist = async (req, res) => {
  const { title } = req.body;
  try {
    const result = await pool.query('INSERT INTO playlists (title) VALUES ($1) RETURNING *', [title]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { addPlaylist };
