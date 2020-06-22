import React from 'react';

import './iframe.css';

const Iframe = ({visibility, link}) => {
  if (!visibility) return null;
  const style = {
    width: '100%',
    height: '87vh',
  };
  const src = `https://reg.avon.ru/prp/${link}`;
  return (
    <iframe src={src} style={style} className='iframe' title='portal'></iframe>
  )
};

export default Iframe;