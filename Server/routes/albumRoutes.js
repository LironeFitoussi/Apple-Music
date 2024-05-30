import { Router } from 'express';
import { addAlbum } from '../controllers/albumController';
const router = Router();

router.post('/', addAlbum);

export default router;
