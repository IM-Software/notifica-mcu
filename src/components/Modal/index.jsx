import React, {useRef, useState} from 'react';
import Input from '../Input';
import ReactLoading from 'react-loading';
import { Form } from '@unform/web';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { verifyKey, insertKeyCartorio, insertKeyPrefeitura } from '../../helpers/api/apiCalls';

import './styles.scss';

const MySwal = withReactContent(Swal)

const Modal = (props) => {
  const { content, fields, title, buttonTitle, name } = props.selectedItem;
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef()

  const handleFormSubmit = async data => {


    const hasEmptyField = Object.values(data).some((field) => field === '');

    if(hasEmptyField) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos',
      })
      return;
    }
   
    setIsLoading(true);

    try {
      await verifyKey(name, data);
      
      try {
    
        if (name === 'cartorio') await insertKeyCartorio(data);
    
        if (name === 'prefeitura') await insertKeyPrefeitura(data);
    
        MySwal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: 'Salvo com sucesso, a atualização será feita em horário comercial, em até 1 hora após o status mudar',
        });
    
        setIsLoading(false);
        props.onClick();
      } catch (err) {
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response?.data?.message || 'Provedor indisponível no momento',
        });
      }
    } catch (err) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.response?.data?.message || 'Provedor indisponível no momento',
      });
      console.log(err)
    }
    setIsLoading(false);
  }
 

  return (
    <div className='modal'>
        <div className='modal__content'>

        { isLoading ? (
        <div className='loading'>
          <ReactLoading type='spinningBubbles' color="black" height={100} width={100} />
          <small>Aguarde</small>
        </div>

      ) : (
        <>
        <button className='close' onClick={() => props.onClick()}>X</button>
        <h2>{title}</h2>
        <span>{content}</span>
  
        <div className='modal__content__fields'>
        <Form ref={formRef} onSubmit={handleFormSubmit}>
          {fields.map((field) => (
            <div className='modal__content__fields__field'>
               <Input name={field} placeholder={`Insira seu ${field}`} />
            </div>
          ))}
            <button type="submit">{buttonTitle}</button>
          </Form>
        </div>
        </>
      )}
      </div>
  </div>
  );
}

export default Modal;