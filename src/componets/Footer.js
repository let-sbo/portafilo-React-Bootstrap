import React from "react";

export default function Footer() {
  return (
    <footer
      id='footer'
      className='container-fluid bg-dark d-flex flex-wrap align-items-center justify-content-around pb-3'>
      <div style={{ width: "18rem" }} className='card mt-3'>
        <div className='card-head text-center mt-3'>Sections</div>
        <div className='card-body'> 
          <ul className='navbar-nav'> 
            <li className='nav-item'>
              <a href='#home' className='nav-link'>
                <i className='fas fa-home me-1'></i>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a href='#proyects' className='nav-link'>
                <i className='fas fa-project-diagram me-1'></i>
                Proyects
              </a>
            </li>
            <li className='nav-item'>
              <a href='#contact' className='nav-link'>
                <i className='fas fa-id-badge me-1'></i>
                Contact
              </a>
            </li>
            <li className='nav-item'>
              <a href='#footer' className='nav-link'>
                <i className='fas fa-arrow-up me-1'></i>
                Footer
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div style={{ width: "18rem" }} className='card mt-3'>
        <div className='card-head text-center mt-3'>Social Media</div>
        <div className='card-body'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <span className='nav-link'>
                <i className='fab fa-facebook-f me-1'></i>
                Facebook
              </span>
            </li>
            <li className='nav-item'>
              <span className='nav-link'>
                <i className='fab fa-instagram me-1'></i>
                Instagram
              </span>
            </li>
            <li className='nav-item'>
              <span className='nav-link'>
                <i className='fab fa-tiktok me-1'></i>
                Tik-Tok
              </span>
            </li>
            <li className='nav-item'>
              <span className='nav-link'>
                <i className='fab fa-youtube me-1'></i>
                Youtube
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ width: "18rem" }} className='card mt-3'>
        <div className='card-head text-center mt-3'>Privacity</div>
        <div className='card-body'>
          <h4 className='card-title'>Made for @let.sbo</h4>
          <p className='card-text'>
            Made with & in Bentonville, Boston, Joplin, Seattle, and Vergennes.
            © Fonticons, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
