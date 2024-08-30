export interface Worker {
  id?: number;
  user_id: number;
  profissao: string;
  descricao?: string;
  experiencia?: number;
  avaliacao_media?: number;
  preco_hora?: number;
  disponibilidade?: string;
  foto_perfil?: string;
}
