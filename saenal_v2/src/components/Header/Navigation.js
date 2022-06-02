import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHeart, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import mainLogos from '../../asset/images/saenal.png';

export default function Navigation() {
  return (
    <header className="header">

        <a href="#home" className="logo"> 
            <img src={mainLogos} alt="" />
        </a>

        <form action="" className="search-form">
            <input type="search" name="" placeholder="search here..." id="search-box" />
            <FontAwesomeIcon icon={faSearch} size="2x"/>
        </form>

        <div className="icons" style={{display: 'flex'}}>
            <div id="menu-btn">
                <FontAwesomeIcon icon={faBars} size="lg" />
            </div>
            <a href='#'>
                <FontAwesomeIcon icon={faHeart} size="lg"/>
            </a>
            <a href='#'>
                <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
            </a>
        </div>
    </header>
  )
}
