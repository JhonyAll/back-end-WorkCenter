import { Router } from 'express';
import { WorkerController } from '../controllers/worker.controller';

const router = Router();

router.get('/workers', WorkerController.getAll);
router.get('/workers/:id', WorkerController.getById);
router.post('/workers', WorkerController.create);
router.put('/workers/:id', WorkerController.update);
router.delete('/workers/:id', WorkerController.delete);

export default router;