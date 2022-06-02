import React, { Fragment } from 'react'
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function Head() {
  return (
    <Fragment>
        <Navigation />
        <nav className="navbar">
            <div id="close-navbar">
                <FontAwesomeIcon icon={faTimes} size="lg"/>
            </div>
            <a href="#home">Home</a>
            <a href="#shop">About us</a>
            <a href="#gallery">Product</a>
            <a href="#team">Contact Us</a>
        </nav>
    </Fragment>
  )
}

export default Head;