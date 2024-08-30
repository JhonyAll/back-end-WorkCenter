import { Request, Response } from 'express';
import { WorkerService } from '../services/worker.service';

export class WorkerController {
  static async getAll(req: Request, res: Response): Promise<void> {
    const workers = await WorkerService.getAllWorkers();
    res.json(workers);
  }

  static async getById(req: Request, res: Response): Promise<void> {
    const worker = await WorkerService.getWorkerById(Number(req.params.id));
    if (worker) {
      res.json(worker);
    } else {
      res.status(404).json({ message: 'Worker not found' });
    }
  }

  static async create(req: Request, res: Response): Promise<void> {
    await WorkerService.createWorker(req.body);
    res.status(201).json({ message: 'Worker created' });
  }

  static async update(req: Request, res: Response): Promise<void> {
    await WorkerService.updateWorker(Number(req.params.id), req.body);
    res.json({ message: 'Worker updated' });
  }

  static async delete(req: Request, res: Response): Promise<void> {
    await WorkerService.deleteWorker(Number(req.params.id));
    res.json({ message: 'Worker deleted' });
  }
}
