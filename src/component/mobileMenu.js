/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable eqeqeq */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom"

const MobileMenuBar = () => {
  const location = useLocation();

  //console.log("Current Route: ", location.pathname);

  return (
    <Fragment>
        <header className="header navbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="nav-inner">
                    <a className="navbar-brand" href="#">
                      <img src="assets/images/logo/white-logo.svg" alt="Logo" />
                    </a>
                </div>
              </div>
            </div>
          </div>
        </header>
    </Fragment>
  );
}

export default MobileMenuBar;
