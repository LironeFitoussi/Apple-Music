const pool = require('../db');

const addArtist = async (req, res) => {
  const { name } = req.body;
  try {
    const result = await pool.query('INSERT INTO artists (name) VALUES ($1) RETURNING *', [name]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getArtists = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM artists');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = { addArtist, getArtists };
