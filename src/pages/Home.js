/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect } from "react";
import MenuBar from "../component/Menu";
import FooterNote from "../component/Footer";
import HeroSectionPage from "../component/HeroSection";
import RouterPage from "../route/RouterPage";
import { Navigate, useLocation, matchPath  } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  const clearCacheData = () => {
    caches.keys().then((names) => {
        names.forEach((name) => {
            caches.delete(name);
        });
    });
    alert("Complete Cache Cleared");
};

  useEffect(() => {
   // console.log("All Routes ", isMatch)
   function fadeout() {
    document.querySelector('.preloader').style.opacity = '0';
    document.querySelector('.preloader').style.display = 'none';
}
  const timeoutID = window.setTimeout(fadeout,() => {
 }, 2000);
 return () => window.clearTimeout(timeoutID );

  }, [location.pathname])

    window.addEventListener('load', function() {
        // eslint-disable-next-line no-undef
        GLightbox({
            'href': 'https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM',
            'type': 'video',
            'source': 'youtube', //vimeo, youtube or local
            'width': 900,
            'autoplayVideos': true,
        });
    });

  return (
    <>
      <Fragment>
        {/* loader */}
        <div className="preloader">
          <div className="preloader-inner">
            <div className="preloader-icon">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* menu comes here */}
        <MenuBar />

        {/* hero home section */}
        
        <HeroSectionPage />
        {/* tailor section */}
        <section className="freatures section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12">
                <div className="image wow fadeInLeft" data-wow-delay=".3s" onClick={() => clearCacheData()}>
                  <img src="assets/images/features/feature-img.png" alt="#" />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="content">
                  <h3 className="heading wow fadeInUp" data-wow-delay=".5s">
                  Solutions tailored to meet 
                    <br />your financial needs.
                  </h3>

                  <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                    <div className="f-icon">
                      <i className="lni lni-dashboard"></i>
                    </div>
                    <h4>Easy to use solution</h4>
                    <p style={{fontSize: 20}}>
                      With intuitive UI design, user friendly, beautiful dashboard and easy navigation, you can manage all your transaction with easy in the application
                    </p>
                  </div>

                  <div className="single-feature wow fadeInUp" data-wow-delay=".7s">
                    <div className="f-icon">
                      <i className="lni lni-pencil-alt"></i>
                    </div>
                    <h4>Manage Report</h4>
                    <p style={{fontSize: 20}}>
                      With a click you can view and manage all your transaction details within the application
                    </p>
                  </div>

                  <div
                    className="single-feature wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="f-icon">
                      <i className="lni lni-vector"></i>
                    </div>
                    <h4>Connect with users</h4>
                    <p style={{fontSize: 20}}>
                      You can easily connect with other users to send and receive funds and do business with them
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* explore more section */}
        <div className="services section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  
                  <h2 className="heading wow fadeInUp" data-wow-delay=".4s">
                    Explore a wider range of solutions with us.
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s" style={{fontSize: 20}}>
                  We recognize that your financial needs go beyond the realm of buying and selling virtual funds. Discover more possibilities with us, including virtual funds exchange, utility bill payment, buy airtime and data, subscribe your favorite cable TV all with virtual funds .
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="single-service">
                  <div className="main-icon">
                    <i className="lni lni-grid-alt"></i>
                  </div>
                  <h4 className="text-title">Exchange funds</h4>
                  <p style={{fontSize: 20}}>
                  Easily buy and sell your virtual funds on the go with higher rate, get your bank account funded in no time!
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="single-service">
                  <div className="main-icon">
                    <i className="lni lni-keyword-research"></i>
                  </div>
                  <h4 className="text-title">Pay utility bills</h4>
                  <p style={{fontSize: 20}}>
                  Experience seamless payments, just a few clicks. Pay utility bills, airtime, electricity and data subscriptions effortlessly with virtual funds.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="single-service">
                  <div className="main-icon">
                    <i className="lni lni-vector"></i>
                  </div>
                  <h4 className="text-title">Subscribe to cables</h4>
                  <p style={{fontSize: 20}}>
                    Never run out of subscriptions, with just a few clicks. Pay your favorite cable TV subscription all with virtual funds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* video intro demo section */}
        <section className="intro-video-area section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="inner-content-head">
                  <div className="inner-content">
                    <img
                      className="shape1"
                      src="assets/images/video/shape1.svg"
                      alt="#"
                    />
                    <img
                      className="shape2"
                      src="assets/images/video/shape2.svg"
                      alt="#"
                    />
                    <div className="section-title">

                      <h2 className="wow fadeInUp" data-wow-delay=".4s">
                        Take control of the application
                      </h2>
                      
                      <p className="wow fadeInUp" data-wow-delay=".6s" style={{fontSize: 20}}>
                       Take a tour and watch the demo of the application how it works 
                      </p>
                     
                    </div>                  
                    
                    <div className="intro-video-play">
                      <div className="play-thumb wow zoomIn" data-wow-delay=".2s">
                       <a
                          href="https://www.youtube.com/watch?v=r44RKWyfcFw&amp;fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                          className="glightbox video"
                        >
                          <i className="lni lni-play"></i>
                        </a>
                      </div>
                    </div>
                    <br/>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <img
                        src="assets/images/logo/support_funds.png"
                        alt="#" width={300} height={120} 
                        />
                   </div>
                   <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                       <p className="wow fadeInUp" data-wow-delay=".6s" style={{fontSize: 20}}>
                          Major virtual funds supported 
                          </p>
                   </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* frequent ask question */}
        <section className="faq section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                 
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">
                    frequently asked questions
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s" style={{fontSize: 20}}>
                    Most frequently asked questions by users and what you can possibly get know
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="accordion" id="accordionExample">

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1"
                        aria-expanded="false"
                        aria-controls="collapse1"
                      >
                        <span className="title">
                          How to I get started with the solution
                        </span>
                        <i className="lni lni-plus"></i>
                      </button>
                    </h2>
                    <div
                      id="collapse1"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading1"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p style={{fontSize: 20}}>
                          It is very easy to get started with the solution you have to create an account, verify your account, login and start to use the solution.<br/>
                         
                        </p>
                        <p style={{fontSize: 20}}>
                          The process takes less than five minutes to get started
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading2">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2"
                        aria-expanded="false"
                        aria-controls="collapse2"
                      >
                        <span className="title">
                          Can I start and complete account verification process later on?
                        </span>
                        <i className="lni lni-plus"></i>
                      </button>
                    </h2>
                    <div
                      id="collapse2"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading2"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p style={{fontSize: 20}}>
                          Yes, you can complete the account verification process at your own pace! But, it might limit your access to other benefits in the solution.
                        </p>
                        <p style={{fontSize: 20}}>
                          Your transaction might be limited if your account is not fully verified.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading3">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3"
                        aria-expanded="false"
                        aria-controls="collapse3"
                      >
                        <span className="title">
                          What kind of virtual funds can I sell/exchange or buy from the application?
                        </span>
                        <i className="lni lni-plus"></i>
                      </button>
                    </h2>
                    <div
                      id="collapse3"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading3"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p style={{fontSize: 20}}>
                          For simplicity and seamless transaction, we support the following virtual funds:
                          <br/>
                          <b>Paypal</b><br/>
                          <b>Payoneer</b><br/>
                          <b>Bitcoin</b><br/>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading4">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse4"
                        aria-expanded="false"
                        aria-controls="collapse4"
                      >
                        <span className="title">
                         Is my transactions safe and secured in the application?
                        </span>
                        <i className="lni lni-plus"></i>
                      </button>
                    </h2>
                    <div
                      id="collapse4"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading4"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p style={{fontSize: 20}}>
                          All your transactions are safe and secured! <br/>
                          We process all transactions via a secured and trusted payment system, and you have option to checkout with any of the payment gateway system using:
                          <br/>
                          <b>PayStack</b><br/>
                          <b>Paypal</b><br/>
                            OR
                          <br/>
                          <b>Bank Deposit</b><br/>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12 xs-margin">
                <div className="accordion" id="accordionExample2">
                  
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading11">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse11"
                        aria-expanded="false"
                        aria-controls="collapse11"
                      >
                        <span className="title">
                          How many time can I transact in a day?
                        </span>
                        <i className="lni lni-plus"></i>
                      </button>
                    </h2>
                    <div
                      id="collapse11"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading11"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        <p style={{fontSize: 20}}>
                          The system is open 24/7 and you can do any transact as many you can! Except your account has an issue which might limit your transaction.
                        </p>
                        <p>
                          You can always contact us in any of our platform if you have any questions
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading22">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse22"
                        aria-expanded="false"
                        aria-controls="collapse22"
                      >
                        <span className="title">Do I need to pay to use the application?</span>
                        <i className="lni lni-plus"></i>
                      </button>
                    </h2>
                    <div
                      id="collapse22"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading22"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        <p style={{fontSize: 20}}>
                         No, you don't have to pay to download the app or to use the application! It is free and it will always remain free.
                        </p>
                        <p>
                          
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading33">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse33"
                        aria-expanded="false"
                        aria-controls="collapse33"
                      >
                        <span className="title">Do you charge commission from my transaction?</span>
                        <i className="lni lni-plus"></i>
                      </button>
                    </h2>
                    <div
                      id="collapse33"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading33"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        <p style={{fontSize: 20}}>
                          No, all transactions in our system are zero charges. We offer high competitive rate exchanging your virtual funds with us.
                        </p>
                        <p>
                          We believed that your hard earned money is your assets and it should have a good value so, why wasting it on low rate or with unverified dealers at there.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading44">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse44"
                        aria-expanded="false"
                        aria-controls="collapse44"
                      >
                        <span className="title">Can I delete my account any time I wish?</span>
                        <i className="lni lni-plus"></i>
                      </button>
                    </h2>
                    <div
                      id="collapse44"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading44">
                      <div className="accordion-body">
                        <p style={{fontSize: 20}}>
                          Yes, you can easily delete your account details if you no longer want to use the application.
                        </p>
                        <p>
                          But, we believed there could be no reason to do so because we are here for you and we will try our best to serve you better.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* call to action section */}
        <section className="call-action">
          <div className="container">
            <div className="inner-content">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-7 col-12">
                  <div className="text">
                    <h2>
                      Download the app & enjoy
                      <br /> high rate selling your Paypal, Payoneer & Bitcoin funds today.
                    </h2>
                  </div>
                </div>
                <div className="col-lg-6 col-md-5 col-12">
                  <div className="button">
                    <a href="#" className="btn">
                      <i className="lni lni-apple"></i> App Store
                    </a>
                    <a href="#" className="btn btn-alt">
                      <i className="lni lni-play-store"></i> Google Play
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FooterNote/>
      </Fragment>
    </>
  );
};

export default Home;
