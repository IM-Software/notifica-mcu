import React from 'react';

import './styles.scss';

const Button = (props) => {

  const { buttonTitle, isAvailable } = props.data;

  return (
    <button disabled={!isAvailable} onClick={() => props.onClick()} className={!isAvailable ? 'button button--disabled' : 'button'} >{buttonTitle}</button>
  );
}

export default Button;