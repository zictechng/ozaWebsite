import React, { Fragment, useEffect } from 'react';
import FooterNote from '../component/Footer';
import MenuBar from '../component/Menu';

const UserPrivacyPolicy = () =>{

    useEffect(() => {
        function fadeout() {
            document.querySelector('.preloader').style.opacity = '0';
            document.querySelector('.preloader').style.display = 'none';
        }
        const timeoutID = window.setTimeout(fadeout,() => {
        }, 2000);
     
         return () => window.clearTimeout(timeoutID );
    }, [])
  return (
    <>
     <Fragment>
     <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
        <MenuBar />

        <div className="breadcrumbs">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                <div className="breadcrumbs-content">
                  <h1 className="page-title">Privacy Policy</h1>
                  <ul className="breadcrumb-nav">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Company Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-us section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12">
                <div className="contact-widget-wrapper">
                  <div className="main-title">
                    <h2>Privacy Policy</h2>
                    <p>
                    Effective date: 2023-07-23<br/>

                    <b>INTRODUCTION</b><br/>
                    Welcome to Apex Web Network Limited.<br/>

                    Apex Web Network Limited (“Apex”, “us”, “we”, or “our”) operates https://apexnetwork.co (hereinafter referred to as “Service”, “Exchange”).

                    Our Privacy Policy governs your visit to https://apexnetwork.co, and explains how we collect, safeguard and disclose information that results from your use of our Service. We use your data to provide and improve our Service.
                    </p>
                  </div>
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <FooterNote/>
      </Fragment>
    </>
  );
}

export default UserPrivacyPolicy;


