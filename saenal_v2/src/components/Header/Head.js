import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars, faHeart, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import mainLogos from '../../asset/images/saenal.png';

function Head() {

  

  const menuBtnClick = () => {
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
  }

  const menuBtnClose = () => {
    let navbar = document.querySelector('.navbar');
    navbar.classList.remove('active');
  }
  
  window.onscroll = () =>{
    let navbar = document.querySelector('.navbar');
    navbar.classList.remove('active');
  };

  return (
    <Fragment>
         <header className="header">
            <a href="#home" className="logo"> 
                <img src={mainLogos} alt="" />
            </a>

            <div className="icons" style={{display: 'flex'}}>
                <div id="menu-btn" onClick={() => menuBtnClick()}>
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
        <nav className="navbar"  style={{backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.8), rgba(255, 255, 0, 0.5)),
          url('/images/navbar-bg1.png')`}}>
            <div id="close-navbar" onClick={() => menuBtnClose()}>
                <FontAwesomeIcon icon={faTimes} size="lg"/>
            </div>
            <a href="#home">Home</a>
            <a href="#">Product</a>
            <a href="#aboutUs">About us</a>
            <a href="#contactUs">Contact Us</a>
        </nav>
    </Fragment>
  )
}

export default Head;