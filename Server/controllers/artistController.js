const pool = require('../db');
const errorHandle = require('./errorController');

const addArtist = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      status: 'error',
      error: 'Request body must contain a name property',
    });
  }
  try {
    const result = await pool.query('INSERT INTO artists (name) VALUES ($1) RETURNING *', [name]);
    res.status(201).json({
      status: 'success',
      total: result.rowCount,
      data: {
        artist: result.rows[0],
      },
    });
  } catch (err) {
    errorHandle(err, res);
  }
};

const getArtists = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM artists');
    res.status(200).json({
      status: 'success',
      total: result.rowCount,
      data: {
        artists: result.rows,
      },
    });
  } catch (err) {
    errorHandle(err, res);
  }
}

module.exports = { addArtist, getArtists };
