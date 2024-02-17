import React, { Fragment, useEffect } from 'react';
import FooterNote from '../component/Footer';
import MenuBar from '../component/Menu';

const TermsCondition = () => {

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
                  <h1 className="page-title">Terms and Conditions</h1>
                  <ul className="breadcrumb-nav">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Company Terms and conditions</li>
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
                    <h2>Terms and Conditions</h2>
                    <p>
                    Welcome to Oza!<br/>
                    Welcome! Thank you for visiting the Apex Exchange, a digital asset platform operated by and proprietary to Apex Web Network Limited, a company incorporated in Nigeria. You agree and understand that by signing up to the Apex Exchange and opening an account, you are agreeing to enter into this Terms of Use (the “Terms of Use”, “ToU”) by and between you and Apex Web Network Limited, and be legally bound by its terms and conditions, so please read them carefully. If any terms or conditions of this Terms of Use is unacceptable to you, please do not visit, access, or use the Apex platform. Use of the words “we,” “us,” “our” or “Apex” in this Terms of Use refers to Apex Web Network Limited and any or all of its affiliates.

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

export default TermsCondition;
