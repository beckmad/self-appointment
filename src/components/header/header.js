import React from 'react';
import './header.css'

const Header = ({visibility}) => {
  if (visibility) return null;
  return (
    <header className="header">
      <a href="https://my.avon.ru/" className="animate__animated animate__flipInX">
        <svg viewBox="0 0 231.1 45.4" width='150' height='30' color='#fff'>
          <path fill="currentColor"
                d="M157.9,6.54a23.74,23.74,0,0,0-32.73,0,22.52,22.52,0,0,0,0,32.21A22.79,22.79,0,0,0,141.5,45.4a23.38,23.38,0,0,0,16.39-6.65,22.17,22.17,0,0,0,6.78-16A22.34,22.34,0,0,0,157.9,6.54Zm1.8,16.16A18.18,18.18,0,1,1,141.5,4.52,18.21,18.21,0,0,1,159.7,22.7Z"></path>
          <path fill="currentColor"
                d="M81.58,26.84l-4,8.74-4-8.75L61.42,1.18H55.86l20.06,42a1.79,1.79,0,0,0,3.24,0l20.07-42H93.61Z"></path>
          <path fill="currentColor"
                d="M226.25,1.08V25.3l.11,9.9-33-33.05a1.79,1.79,0,0,0-3.06,1.27V44.33h4.85L195,10.21l33,33.37a1.79,1.79,0,0,0,3.07-1.26V1.08Z"></path>
          <path fill="currentColor"
                d="M0,44.13H5.64l5-10.55h23l5.08,10.55h5.57L23.78,2.27a1.8,1.8,0,0,0-3.22,0ZM31.53,29H12.86l4.8-10,4.53-9.63L26.71,19Z"></path>
        </svg>
      </a>
    </header>
  )
};

export default Header;