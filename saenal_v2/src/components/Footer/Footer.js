import React from 'react'
import logo from '../../asset/images/saenal.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faMapLocation, faPhone} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <section className="footer">

      <div className="box-container">
          <div className="box">
              <h3>Quick Menu</h3>
              <a className="link" href="#home"> <i className="fas fa-angle-right"></i> home</a>
              <a className="link" href="#gallery"> <i className="fas fa-angle-right"></i> gallery</a>
              <a className="link" href="#team"> <i className="fas fa-angle-right"></i> team</a>
              <a className="link" href="#aboutUs"> <i className="fas fa-angle-right"></i> About Us</a>
              <a className="link" href="#contactUs"> <i className="fas fa-angle-right"></i> Contact Us</a>
          </div>

          <div className="box">
            <div style={{maxHeight: '265px'}}>
              <img src={logo} style={{width: '100%' , height:'100%', opacity: 0.7}}/>
            </div>
          </div>

          <div className="box">
              <h3>Contact Info</h3>
              <p> </p>
              <p> </p>
              <p> <FontAwesomeIcon icon={faPhone} /> +02-2689-0752 </p>
              <p> <FontAwesomeIcon icon={faEnvelope} /> snad0752@hanmail.net </p>
              <p> <FontAwesomeIcon icon={faMapLocation} /> 경기 광명시 일직로 43, GIDC광명역 B동 403-404호 (우: 14353) </p>
              {/* <div className="share">
                  <a href="#" className="fab fa-facebook-f"></a>
                  <a href="#" className="fab fa-twitter"></a>
                  <a href="#" className="fab fa-instagram"></a>
                  <a href="#" className="fab fa-linkedin"></a>
              </div> */}
          </div>

      
      </div>

      <div className="credit"> created by <span className='developer'> MOON </span> | it's present! </div>
</section>
  )
}

export default Footer;