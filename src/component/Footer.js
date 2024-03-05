/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import client from './client';
import Spinner from 'react-bootstrap/Spinner';
import IsValidEmail from './EmailValidation';

const FooterNote = () => {

  const [companyName, setCompanyName] = useState('');
 
  const [newsLetter, setNewsLetter] = useState('');
  const [errorMessage, setErrorMessage] = useState({
    message: '',
    color: '',
  });
  const [showError, setShowError] = useState(false);
  const[showLoader, setShowLoader] = useState(false);

    const today = new Date();
    const year = today.getFullYear();

    // function to close error messages notification
    const closeErrorShow =() => {
      setShowError(false);
    }
    // function to create mailing list
    const mailingList = async() =>{
      if(newsLetter.length == 0 || newsLetter == ''){
        setShowError(true);
        setErrorMessage({
          message: 'Please enter email address',
          color: '#e32f45',
        })
        return;
      } 
      if(!IsValidEmail(newsLetter)){
        setShowError(true);
        setErrorMessage({
          message: 'Invalid email address not accepted',
          color: '#e32f45',
        })
        return;
      }
      setShowLoader(true)
      const sendData ={
        "userEmail": newsLetter,
        }
        try {
          const res = await client.post(`/api/newsletter_subscriptions`, sendData, {
          })
          if(res.data.msg =='200'){
           setShowError(true);
            setErrorMessage({
              message: `Thank you for subscribing!\n\n
              You are set to start receiving notifications from us`,
              color: '#1CB377',
            })
            setNewsLetter("")
            }
            else if(res.data.status =='403'){
              setShowError(true);
              setErrorMessage({
                message: res.data.message,
                color: '#e32f45',
              })
              }
            else if(res.data.status =='500'){
              setShowError(true);
              setErrorMessage({
                message: res.data.message,
                color: '#e32f45',
              }) 
              }
            } catch (error) {
              console.log(error.message)
            }
            finally{
              setShowLoader(false)
             }
    }
    
  useEffect(() => {
    const infoData = JSON.parse(localStorage.getItem("CompanyName"));
    const infoDataDesc = JSON.parse(localStorage.getItem("CompanyShortInfo"));
    const infoDataTitle = JSON.parse(localStorage.getItem("CompanyAppTitle"));

    if(infoData){
      setCompanyName(infoData)
    }
}, [])

    
  return (
    <>
        <Fragment>
        <footer className="footer section">
          <div className="footer-top">
            <div className="container">
              <div className="inner-content">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-footer f-about">
                      <div className="logo">
                        <a href="/">
                          <img
                            src="assets/images/logo/white-logo.svg"
                            alt="#"/>
                        </a>
                      </div>
                      <p>
                        {/* Simplifying virtual funds exchange.<br/> */}
                        A simple, secure and profitable way to sell virtual funds!
                    <br/> Maximize Returns Selling Your Virtual Funds with higher rates.
                      </p>
                      <h4 className="social-title">Follow Us On:</h4>
                      <ul className="social">
                        <li>
                          <Link href="#">
                            <i className="lni lni-facebook-filled"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="lni lni-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="lni lni-twitter-original"></i>
                          </Link>
                        </li>
                        {/* <li>
                          <Link href="#">
                            <i className="lni lni-youtube"></i>
                          </Link>
                        </li> */}
                      </ul>
                    </div>
                   
                  </div>
                  
                  <div className="col-lg-2 col-md-5 col-12">
                    <div className="single-footer f-link">
                      <h3>Company Info</h3>
                      <ul>
                        <li>
                          {/* <a href="javascript:void(0)">About Us</a> */}
                          <Link to={"/about-us"}>About Us</Link>
                        </li>
                        <li>
                          {/* <a href="javascript:void(0)">Contact Us</a> */}
                          <Link to={"/contact-us"}>Contact Us</Link>
                        </li>
                        <li>
                          <Link to={"/terms-and-conditions"}>Terms and Conditions</Link>
                        </li>
                        <li>
                          <Link to={"/privacy-policy"}>Privacy Policy</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Reg: <strong>7046583</strong></Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-5 col-12">
                    <div className="single-footer f-link">
                      <h3>Support</h3>
                      <ul>
                        <li>
                          {/* <a href="mail:hello@oza.com">Email</a> */}
                          <Link to='#'
                          onClick={() => window.location = 'mailto:hello@ozaapp.com'} >Email</Link>
                        </li>
                        <li>
                          {/* <a href="javascript:void(0)">In-app Message</a> */}
                          <Link to="/signup">In-app Message</Link>
                        </li>
                        <li>
                          <Link to="/signup">Ticketing</Link>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-5 col-12">
                    <div className="single-footer newsletter">
                      <h3>Get Instant Notification</h3>
                      <p>Subscribe to our newsletter for the latest updates, loan support, giveaways and more...</p>
                      <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                       <input
                          placeholder="Email address"
                          required="required"
                          type="email"
                          value={newsLetter}
                          onChange={(e) => setNewsLetter(e.target.value.trim())}
                        />
                        <div className="button">
                          <button className="sub-btn" onClick={() =>mailingList()}>
                          {showLoader ? <>
                          <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                            />{" "}
                            </> : <i className="lni lni-envelope"></i>}
                           </button>
                        </div>
                        {showError && <div className='row'><p style={{color: errorMessage.color}}>{errorMessage.message}
                        {" "}<i style={{color: '#fff', fontSize:14, cursor:'pointer'}} className="lni lni-close" onClick={() =>closeErrorShow()}></i> </p> </div> }
                        {/* <p style={{color: '#e32f45'}}>Error show here</p> */}
                      </form>
                     </div>
                   </div>
                  </div>
              </div>
            </div>
          </div>
          <section className="call-action" style={{backgroundColor:'#081828'}}>
          <div className="container">
            <div className="inner-content-footer">
              <div className="row">
              <div className="col-lg-6 col-md-7 col-12">
                  <div className="text">
                  <h4 style={{color:'#fff'}}>
                      Visit respective stores to download the app
                  </h4>
                  </div>
                </div>
                <div className="col-lg-6 col-md-5 col-12">
                  <div className="button">
                    {/* <a href="#" className="btn">
                      <i className="lni lni-apple"></i> App Store
                    </a> */}
                    <a href="#" className="btn bg-white" style={{color:'#081828'}}>
                      <i className="lni lni-play-store"></i> Google Play
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

          <div className="copyright-area">
            <div className="container">
              <div className="inner-content">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <p className="copyright-text">
                      © {year} {companyName} - All Rights Reserved
                     </p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <p className="copyright-owner">
                      A product by{" "}
                      <a href="https://zictech-ng.com/">
                        Zictech Technologies Limited
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <a href="#" className="scroll-top">
          <i className="lni lni-chevron-up"></i>
        </a>
        <div className=''>

        </div>
        <a
        href="https://wa.me/447389646157?text=Welcome to Oza support center! How may we help you today?"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
        </Fragment>
    </>
  );
}

export default FooterNote;
