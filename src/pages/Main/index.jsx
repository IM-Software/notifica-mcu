import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import Modal from '../../components/Modal';

import CONSTANTS from './constants.js';
import Item from '../../components/Item';

import './styles.scss';

function Main() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsOpen((isOpen) => !isOpen)
  }
 
  return (
    
    <div className='main'>
      { isOpen && (
        <Modal selectedItem={selectedItem} onClick={() => setIsOpen((isOpen) => !isOpen)} />
      )}
      <div className='main__header'>
        <img src={Logo} alt='Logo' />
        <h1>{CONSTANTS.SLOGAN}</h1>
        <span>{CONSTANTS.CONTENT}</span>
      </div>
      <div className='main__content'>
        <h2>Serviços disponíveis:</h2>
        <span>Obs: Mais serviços serão adicionados em breve</span>
        <div className='main__content__container' >
          { CONSTANTS.PROVIDERS.map((item) => (
            <Item onClick={() => handleSelect(item.modal)} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;