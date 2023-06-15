const APIS = {
  cartorio: {
    url: process.env.REACT_APP_CARTORIO_API,
    method: 'GET',
  },
  prefeitura: {
    url: process.env.REACT_APP_PREFEITURA_API,
    method: 'POST',
  },
};

export default APIS;
