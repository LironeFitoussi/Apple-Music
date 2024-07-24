const express = require('express');
const pool = require('./db');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// Importer les routes
const artistRoutes = require('./routes/artistRoutes');
const albumRoutes = require('./routes/albumRoutes');
const playlistRoutes = require('./routes/playlistRoutes');
const audioRoutes = require('./routes/audioRoutes');

// Utiliser les routes
app.use('/artists', artistRoutes);
app.use('/albums', albumRoutes);
app.use('/playlists', playlistRoutes);
app.use('/audios', audioRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
