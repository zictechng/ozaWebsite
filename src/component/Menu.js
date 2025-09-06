import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom"

const MenuBar = () => {
<<<<<<< HEAD
const location = useLocation();
=======
  const location = useLocation();
>>>>>>> origin/main

  //console.log("Current Route: ", location.pathname);

  return (
    <Fragment>
        <header className="header navbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="nav-inner">
                  <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="/">
                      <img src="assets/images/logo/white-logo.svg" alt="Logo" />
                    </a>
                    <button
                      className="navbar-toggler mobile-menu-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation">
                        
                      <span className="toggler-icon"></span>
                      <span className="toggler-icon"></span>
                      <span className="toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse sub-menu-bar"
                      id="navbarSupportedContent"
                    >
                      <ul id="nav" className="navbar-nav ms-auto">
                        <li className="nav-item">
                            {/* <Link to="/" >Home</Link> */}
                          <a
                            href="/"
                            className={location.pathname =='/'? 'active': ''}
                            aria-label="Toggle navigation">
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-us" className={location.pathname =='/about-us'? 'active': ''}>About</Link>
                        </li>
                        
                        <li className="nav-item">
                          <Link to="/services" className={location.pathname =='/services'? 'active': ''}>
                            Services
                          </Link>
                        </li>
                        <li className="nav-item">
                         <Link to="/contact-us" className={location.pathname =='/contact-us'? 'active': ''}>Contact Us</Link>
                        </li>
                        
                      </ul>
                    </div>
                    <div className="button home-btn">
                      <Link to="/signup" className="btn">Login</Link>
                     
                    </div>
                    <div className="button home-btn">
                      <Link to="/signup" className="btn">Open an account</Link>
                     
                    </div>
                    
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
    </Fragment>
  );
}

export default MenuBar;
