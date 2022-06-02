import React from 'react'

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
              <h3>Contact Info</h3>
              <p> <i className="fas fa-phone"></i> +123-456-7890 </p>
              <p> <i className="fas fa-phone"></i> +02-724-5512 </p>
              <p> <i className="fas fa-envelope"></i> saenal@naver.com </p>
              <p> <i className="fas fa-map"></i> 경기 광명시 일직로 43 GIDC B동 403-404호 (14353) </p>
              <div className="share">
                  <a href="#" className="fab fa-facebook-f"></a>
                  <a href="#" className="fab fa-twitter"></a>
                  <a href="#" className="fab fa-instagram"></a>
                  <a href="#" className="fab fa-linkedin"></a>
              </div>
          </div>

          <div className="box">
              <h3>Letters</h3>
              <p>subscribe for latest updates</p>
          </div>
      </div>

      <div className="credit"> created by <span>Mooneknow@gmail.com </span> | it's present! </div>
</section>
  )
}

export default Footer;