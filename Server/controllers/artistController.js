import { query } from '../db';

const addArtist = async (req, res) => {
  const { name } = req.body;
  try {
    const result = await query('INSERT INTO artists (name) VALUES ($1) RETURNING *', [name]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

export default { addArtist };
