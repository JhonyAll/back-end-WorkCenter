import { connection } from '../config/database';
import { Worker } from '../models/worker.model';

export class WorkerService {
  static async getAllWorkers(): Promise<Worker[]> {
    const [rows] = await connection.query('SELECT * FROM Workers');
    return rows as Worker[];
  }

  static async getWorkerById(id: number): Promise<Worker | null> {
    const [rows] = await connection.query('SELECT * FROM Workers WHERE id = ?', [id]);
    //const worker = rows[0];
    return null;
  }

  static async createWorker(worker: Worker): Promise<void> {
    const { user_id, profissao, descricao, experiencia, avaliacao_media, preco_hora, disponibilidade, foto_perfil } = worker;
    await connection.query(
      'INSERT INTO Workers (user_id, profissao, descricao, experiencia, avaliacao_media, preco_hora, disponibilidade, foto_perfil) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [user_id, profissao, descricao, experiencia, avaliacao_media, preco_hora, disponibilidade, foto_perfil]
    );
  }

  static async updateWorker(id: number, worker: Worker): Promise<void> {
    const { user_id, profissao, descricao, experiencia, avaliacao_media, preco_hora, disponibilidade, foto_perfil } = worker;
    await connection.query(
      'UPDATE Workers SET user_id = ?, profissao = ?, descricao = ?, experiencia = ?, avaliacao_media = ?, preco_hora = ?, disponibilidade = ?, foto_perfil = ? WHERE id = ?',
      [user_id, profissao, descricao, experiencia, avaliacao_media, preco_hora, disponibilidade, foto_perfil, id]
    );
  }

  static async deleteWorker(id: number): Promise<void> {
    await connection.query('DELETE FROM Workers WHERE id = ?', [id]);
  }
}
