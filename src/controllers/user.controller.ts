import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
  static async getAll(req: Request, res: Response): Promise<void> {
    const users = await UserService.getAllUsers();
    res.json(users);
  }

  static async getById(req: Request, res: Response): Promise<void> {
    const user = await UserService.getUserById(Number(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  }

  static async create(req: Request, res: Response): Promise<void> {
    await UserService.createUser(req.body);
    res.status(201).json({ message: 'User created' });
  }

  static async update(req: Request, res: Response): Promise<void> {
    await UserService.updateUser(Number(req.params.id), req.body);
    res.json({ message: 'User updated' });
  }

  static async delete(req: Request, res: Response): Promise<void> {
    await UserService.deleteUser(Number(req.params.id));
    res.json({ message: 'User deleted' });
  }
}