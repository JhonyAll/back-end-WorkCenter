export interface User {
    id?: number;
    nome: string;
    email: string;
    senha: string;
    tipo_usuario: 'comum' | 'trabalhador';
    telefone?: string;
    endereco?: string;
    data_criacao?: Date;
  }