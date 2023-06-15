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


  return response;
};

export default getApiData;
