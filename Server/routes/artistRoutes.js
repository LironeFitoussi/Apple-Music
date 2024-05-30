import { Router } from 'express';
import { addArtist } from '../controllers/artistController';
const router = Router();

router.post('/', addArtist);

export default router;
