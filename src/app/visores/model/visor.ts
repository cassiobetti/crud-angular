import { Espec } from "./espec";
import { Salas } from "./salas";


export interface Visor {
  _id: string;
  nome: string;
  ativo: string;
  chamadas: string;
  tempo: string;
  recepcao: string;
  atendimento: string;
  estatistica: string;
  espec: Espec[];
  salas: Salas[];
}



