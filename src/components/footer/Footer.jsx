import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src="/images/logo.png" alt="logo" />
          <p>An epic tale of heroes, magic, and battles in the legendary Middle-earth, created by J.R.R. Tolkien.</p>
          <div className="icons">
            <a href="https://github.com/devcarlosperez"><i className='bx bxl-github'></i></a>
            <a href="#"><i className='bx bxl-instagram'></i></a>
            <a href="#"><i className='bx bxl-youtube'></i></a>
            <a href="#"><i className='bx bxl-linkedin-square'></i></a>
          </div>
        </div>

        <div className="footer-content">
          <div>
            <h4>Projects</h4>
            <ul>
              <li><a href="https://hellojapan-3523b.web.app/">Hello Japan</a></li>
              <li><a href="#">Houses</a></li>
              <li><a href="#">Hairdresser</a></li>
              <li><a href="#">Car Park</a></li>
            </ul>
          </div>
          <div>
            <h4>Movement</h4>
            <ul>
              <li><a href="#">Movement</a></li>
              <li><a href="#">Support us</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Renting</a></li>
            </ul>
          </div>
          <div>
            <h4>Help</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Conditions</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 The Lord of the Rings All rights reserved</p>
        <p>Created by Carlos Luis Perez Santana</p>
      </div>
    </footer>
  );
}

export default Footer;