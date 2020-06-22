import React from 'react';

import './error.css';

const Error = ({visibility}) => {
  if (visibility) return null;

  return (
    <div className='error-404'>
      <h2>ПЕЙДЖ НОТ ФАУНД</h2>
      <p>Ошибка 404. Такая страница не существует либо она была удалена.</p>
    </div>
  )
};

export default Error;