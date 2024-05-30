import { Router } from 'express';
import { upload, uploadAudio, getAllAudios } from '../controllers/audioController';
const router = Router();

router.post('/upload', upload.single('audio'), uploadAudio);
router.get('/', getAllAudios);

export default router;
