import React from 'react';
import Button from '../../components/Button';

import './styles.scss';


const Item = (props) => {

  const {image, title, buttonTitle, isAvailable} = props.data;

  const buttonData = {
    buttonTitle,
    isAvailable
  }

  return (
    <div className='item'>
    <div>
      <img src={image} alt='cartorio' />
    </div>
    <h3>{title}</h3>
    <Button onClick={() => props.onClick()} data={buttonData} />
  </div>
  )
}

export default Item;