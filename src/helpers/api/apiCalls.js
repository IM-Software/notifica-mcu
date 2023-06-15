import axios from 'axios';

const uri = process.env.REACT_APP_API;

export const verifyKey = async (name, response) => {
  const { protocolo, telefone } = response;
  const useReason = name

  await axios.post(`${uri}/verify`, {
    useReason,
    protocolo,
    telefone: `55${telefone}`,
  });
};

export const insertKeyCartorio = async (data, response) => {
  const { protocolo, telefone, senha } = data;
  const { etapa } = response;

  await axios.post(`${uri}/register`, {
    code: protocolo,
    password: senha,
    phone: `55${telefone}`,
    previousResponse: etapa,
    isFinished: false,
    useReason: 'cartorio',
    createdAt: new Date(),
  });
};

export const insertKeyPrefeitura = async (data) => {
  const { protocolo, telefone } = data;

  await axios.post(`${uri}/register`, {
    code: protocolo,
    phone: `55${telefone}`,
    previousResponse: '',
    isFinished: false,
    useReason: 'prefeitura',
    createdAt: new Date(),
  });
};
