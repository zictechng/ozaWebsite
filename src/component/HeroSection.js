/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';

const HeroSectionPage = () => {

  return (
   <Fragment>
        <section className="hero-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12 col-12">
                <div className="hero-content">
                  {/* <h4>Creative App Landing Page</h4> */}
                  <h1>
                    Sell your virtual funds
                    <br />
                    with high profit return
                  </h1>
                  <p>
                 We simplify your virtual funds deals! <br/> 
                 How to buy, sell and swap your virtual funds to your local currency, get your account credited Instantly and with more possibilities
                  </p>
                  <p><b>We Support major virtual funds</b></p>
                  <div className="row">
                  <div className="col-lg-6 col-12">
                      <img
                        src="assets/images/logo/support_funds.png"
                        alt="#" width={250} height={100}
                      />
                  </div>
                  
                  
                  </div>
                  <div className="button">
                  {/* <a href="#" className="btn" target='_new'><i className="lni lni-apple"></i> App Store</a> */}
                  <a href="https://play.google.com/store/apps/details?id=com.zictech.ozaapp" className="btn" target='_new' style={{backgroundColor:'#1D2667', color:'#fff'}}><i className="lni lni-play-store"></i> Google Play</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-12">
                <div className="hero-image wow fadeInRight" data-wow-delay=".4s">
                  <img
                    className="main-image"
                    src="assets/images/hero/hero-image.png"
                    alt="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
    </Fragment>
  )
}

export default HeroSectionPage;
