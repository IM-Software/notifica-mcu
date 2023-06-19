import Cartorio from '../../assets/cartorio_ri.png';
import Prefeitura from '../../assets/prefeitura.png';

const CONSTANTS = {
  SLOGAN: 'Seu portal de notificações de Manhuaçu',
  CONTENT:
    'Aqui você recebe as notificações dos serviços públicos de Manhuaçu no seu whatsapp, chega de consultar o tempo todo se sua solicitação mudou o status, deixe que fazemos isso por você, cadastre já sua solicitação.',
  DISCLAIMER:
    'Seus dados nunca serão salvos, apenas enviados para o servidor do provedor para consultas futuras.',
  PROVIDERS: [
    {
      name: 'cartorio',
      image: Cartorio,
      title: 'Cartório de registro de imoveis',
      buttonTitle: 'Cadastrar',
      isAvailable: true,
      modal: {
        title: 'Cadastro de solicitação',
        content:
          'Para cadastrar sua solicitação, basta preencher o formulário abaixo.',
        fields: ['telefone', 'protocolo', 'senha'],
        buttonTitle: 'Cadastrar',
        name: 'cartorio',
      },
    },
    {
      name: 'prefeitura',
      image: Prefeitura,
      title: 'Prefeitura de manhuaçu',
      buttonTitle: 'Cadastrar',
      isAvailable: true,
      modal: {
        title: 'Cadastro de solicitação',
        content:
          'Para cadastrar sua solicitação, basta preencher o formulário abaixo.',
        fields: ['telefone', 'protocolo'],
        buttonTitle: 'Cadastrar',
        name: 'prefeitura',
      },
    },
  ],
};

export default CONSTANTS;
