import express, { json } from 'express';
import pool from './db';
require('dotenv').config();

const app = express();
const port = 3000;

app.use(json());

// Importer les routes
import artistRoutes from './routes/artistRoutes';
import albumRoutes from './routes/albumRoutes';
import playlistRoutes from './routes/playlistRoutes';
import audioRoutes from './routes/audioRoutes';

// Utiliser les routes
app.use('/artists', artistRoutes);
app.use('/albums', albumRoutes);
app.use('/playlists', playlistRoutes);
app.use('/audios', audioRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
