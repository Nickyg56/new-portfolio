import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'


function Header() {

  return (
    <header className='App-header'>
      <div className='night-sky'>
        <div className='moon'></div>
        <div className='star-one star'></div>
        <div className='star-two star'></div>
        <div className='star-three star'></div>
        <div className='star-four star'></div>
        <div className='star-five star'></div>
      </div>
      <nav className='nav-bar'>
        <a href="#projects" className="nav-link">Projects</a>
        <a href='https://github.com/Nickyg56'><FontAwesomeIcon className='icon-link' color='white' icon={['fab', 'github']} /></a>
        <a href='https://www.linkedin.com/in/nicholas-gunter-524abb188/'><FontAwesomeIcon className='icon-link' color='white' icon={['fab', 'linkedin']} /></a>
        <a href='mailto: ygnick@live.com'><FontAwesomeIcon className='icon-link' color='white' icon={faEnvelopeSquare} /></a>
      </nav>
    </header>
  )
}

export default Header;