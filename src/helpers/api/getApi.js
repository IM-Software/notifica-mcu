import axios from 'axios';
import APIS from './constants';

const getApiData = async (provider, fields) => {
  const providerApi = APIS[provider];
  let fullUrl;

  if (provider === 'cartorio') {
    fullUrl = `${providerApi.url}${fields.protocolo}/${fields.senha}`;
  }else if (provider === 'prefeitura') {
    fullUrl = `${providerApi.url}`;
  }else {
    fullUrl = providerApi.url;
  }

  let response;

  if (providerApi.method === 'GET') {
    response = await axios.get(fullUrl);
  }

  if (providerApi.method === 'POST') {
    const formData = new FormData();
    formData.append('codigo_processo', fields.protocolo);

    const responseApi =  await axios.post(fullUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    if(!responseApi.data.includes('Não existe dados para a chave informada!')){
      response = responseApi
    }
  }

  return response;
};

export default getApiData;
