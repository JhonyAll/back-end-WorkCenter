import { connection } from '../config/database';
import { User } from '../models/user.model';

export class UserService {
  static async getAllUsers(): Promise<User[]> {
    const [rows] = await connection.query('SELECT * FROM Users');
    return rows as User[];
  }

  static async getUserById(id: number): Promise<User | null> {
    const [rows] = await connection.query('SELECT * FROM Users WHERE id = ?', [id]);
    console.log(rows)
    return null;
  }

  static async createUser(user: User): Promise<void> {
    const { nome, email, senha, tipo_usuario, telefone, endereco } = user;
    await connection.query('INSERT INTO Users (nome, email, senha, tipo_usuario, telefone, endereco) VALUES (?, ?, ?, ?, ?, ?)', 
      [nome, email, senha, tipo_usuario, telefone, endereco]);
  }

  static async updateUser(id: number, user: User): Promise<void> {
    const { nome, email, senha, tipo_usuario, telefone, endereco } = user;
    await connection.query('UPDATE Users SET nome = ?, email = ?, senha = ?, tipo_usuario = ?, telefone = ?, endereco = ? WHERE id = ?', 
      [nome, email, senha, tipo_usuario, telefone, endereco, id]);
  }

  static async deleteUser(id: number): Promise<void> {
    await connection.query('DELETE FROM Users WHERE id = ?', [id]);
  }
}