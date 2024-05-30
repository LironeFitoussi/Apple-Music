import { Router } from 'express';
import { addPlaylist } from '../controllers/playlistController';
const router = Router();

router.post('/', addPlaylist);

export default router;
