/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect } from 'react';
import MenuBar from '../component/Menu';
import FooterNote from '../component/Footer';
import { Link } from 'react-router-dom';

const Services = () => {
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
                <h1 className="page-title">Services</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Our Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

        <section className="freatures section bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-12">
                <div className="image wow fadeInLeft" data-wow-delay=".3s">
                  <img src="assets/images/features/feature-img.png" alt="#" />
                </div>
              </div>
              <div className="col-lg-7 col-12">
                <div className="content">
                  <h3 className="heading wow fadeInUp" data-wow-delay=".5s">
                    Buy, Sell and Swap Virtual Funds
                    <br /> 
                  </h3>

                  <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                    
                    <h4>Buy Virtual Funds</h4>
                    <p>
                        Experience trust and security on our platform. Easily purchase virtual funds at low rates through our seamless platform, enjoy fast transactions and fast deposit with confidence
                    </p>
                  </div>

                  <div className="single-feature wow fadeInUp" data-wow-delay=".7s">
                    
                    <h4>Sell Virtual Funds</h4>
                    <p>
                    Sell your virtual funds at a favorable rate <b>(your own rate)</b> and have your bank account credited instantly. Say goodbye to failed or low rate transactions.<br/>
                    Your funds is your assets, stop wasting it on low rates.
                    </p>
                  </div>

                  <div
                    className="single-feature wow fadeInUp"
                    data-wow-delay="0.8s">
                    <h4>Pay Bill With Virtual Funds</h4>
                    <p>
                    You can now pay all your bills effortlessly using virtual funds. Streamline your payment process by utilizing digital currency for a convenient and efficient transaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
                  <p>
                    You can now work online and earned in dollars, receive your money via <b>PayPal, Payoneer or Bitcoin</b> and sell them in high rates with us! No more hassle how to get value for your funds or sell your virtual funds, we got you covered.<br/>
                    No more limitations to the extend of what you can earn, start remote job today and be rest assured you will get your value from your earning through our user-friendly, secured and competitive platform.
                  </p>
          </div>
        </section>

        {/* <section className="testimonials style2 section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h3 className="wow zoomIn" data-wow-delay=".2s">
                    Customer Reviews
                  </h3>
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">
                    Our Testimonials
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>
            <div className="row testimonial-slider">
              <div className="col-lg-6 col-12 ">
                <div className="single-testimonial">
                  <div className="inner-content">
                    <div className="quote-icon">
                      <i className="lni lni-quotation"></i>
                    </div>
                    <div className="text">
                      <p>
                        “A vast number of clients decide to create dedicated
                        software is the online store. It is nothing but a
                        website with a catalog of products and the possibility.”
                      </p>
                    </div>
                    <div className="author">
                      <img
                        src="assets/images/testimonial/testi-1.png"
                        alt="#"
                      />
                      <h4 className="name">
                        Somalia D Silva
                        <span className="deg">Business Manager</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 ">
                <div className="single-testimonial">
                  <div className="inner-content">
                    <div className="quote-icon">
                      <i className="lni lni-quotation"></i>
                    </div>
                    <div className="text">
                      <p>
                        “A vast number of clients decide to create dedicated
                        software is the online store. It is nothing but a
                        website with a catalog of products and the possibility.”
                      </p>
                    </div>
                    <div className="author">
                      <img
                        src="assets/images/testimonial/testi-2.png"
                        alt="#"
                      />
                      <h4 className="name">
                        David Warner
                        <span className="deg">Web Developer</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 ">
                <div className="single-testimonial">
                  <div className="inner-content">
                    <div className="quote-icon">
                      <i className="lni lni-quotation"></i>
                    </div>
                    <div className="text">
                      <p>
                        “A vast number of clients decide to create dedicated
                        software is the online store. It is nothing but a
                        website with a catalog of products and the possibility.”
                      </p>
                    </div>
                    <div className="author">
                      <img
                        src="assets/images/testimonial/testi-3.png"
                        alt="#"
                      />
                      <h4 className="name">
                        Jems Gilario
                        <span className="deg">Graphics Designer</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 ">
                <div className="single-testimonial">
                  <div className="inner-content">
                    <div className="quote-icon">
                      <i className="lni lni-quotation"></i>
                    </div>
                    <div className="text">
                      <p>
                        “A vast number of clients decide to create dedicated
                        software is the online store. It is nothing but a
                        website with a catalog of products and the possibility.”
                      </p>
                    </div>
                    <div className="author">
                      <img
                        src="assets/images/testimonial/testi-2.png"
                        alt="#"
                      />
                      <h4 className="name">
                        David Warner
                        <span className="deg">Web Developer</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 ">
                <div className="single-testimonial">
                  <div className="inner-content">
                    <div className="quote-icon">
                      <i className="lni lni-quotation"></i>
                    </div>
                    <div className="text">
                      <p>
                        “A vast number of clients decide to create dedicated
                        software is the online store. It is nothing but a
                        website with a catalog of products and the possibility.”
                      </p>
                    </div>
                    <div className="author">
                      <img
                        src="assets/images/testimonial/testi-3.png"
                        alt="#"
                      />
                      <h4 className="name">
                        Jems Gilario
                        <span className="deg">Graphics Designer</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
       
       <div className="services section client-logo">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">
                    Our Services
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s">
                    We offer a competitive solution tailored to your needs and there is no limit to what you can expect in our solution because, we keep adding new exciting and useful features to our solution on a regular basis.
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
                  <h4 className="text-title">Exchange Virtual Funds</h4>
                  <p>
                    Easily exchange your virtual funds to your local currency with a high competitive
                    rates and get your bank account credited within minutes.
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
                  <h4 className="text-title">Request Paypal Account</h4>
                  <p>
                    We make it easier for you to receive funds via paypal accounts! Request a 
                    <b> verified paypal account</b> and have your funds received.
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
                  <h4 className="text-title">Connect With Users</h4>
                  <p>
                    You can easily send and receive funds from members users in the 
                    platform, it takes seconds to receive your funds.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="single-service">
                  <div className="main-icon">
                    <i className="lni lni-book"></i>
                  </div>
                  <h4 className="text-title">Bills Payment</h4>
                  <p>
                    It's easier, faster, convenient to do bill payment with virtual funds.
                    <b> Airtime, Mobile Data, Cable Subscriptions, Electricity and more...</b>
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="single-service">
                  <div className="main-icon">
                    <i className="lni lni-cloud-network"></i>
                  </div>
                  <h4 className="text-title">Buy Virtual Funds</h4>
                  <p>
                    You can easily purchase virtual funds at a very low rate in our platform as a member user.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="single-service">
                  <div className="main-icon">
                    <i className="lni lni-display-alt"></i>
                  </div>
                  <h4 className="text-title">Loan Saver</h4>
                  <p>
                    We provide easy loan facility to our loan saver users! Take advantage of this
                    to scale up your business. <Link to={'/contact-us'}> More details</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="call-action">
          <div className="container">
            <div className="inner-content">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-7 col-12">
                  <div className="text">
                    <h2>
                      Download The App Now! 
                      <br /> <p>Start a new experience.</p>
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
}

export default Services;
