import React, { Fragment, useEffect } from "react";
import MenuBar from "../component/Menu";
import FooterNote from "../component/Footer";

const About = () => {
  useEffect(() => {
    
    function fadeout() {
      document.querySelector('.preloader').style.opacity = '0';
      document.querySelector('.preloader').style.display = 'none';
  }
    const timeoutID = window.setTimeout(fadeout,() => {
   }, 2000);
// eslint-disable-next-line no-undef
  tns({
  container: '.testimonial-slider',
  items: 3,
  slideBy: 'page',
  autoplay: false,
  mouseDrag: true,
  gutter: 0,
  nav: true,
  controls: false,
  responsive: {
      0: {
          items: 1,
      },
      540: {
          items: 1,
      },
      768: {
          items: 2,
      },
      992: {
          items: 2,
      },
      1170: {
          items: 3,
      }
  }
  });
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

     {/* menu comes here */}
     <MenuBar />
      <div className="breadcrumbs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title">About Us</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

        <section className="freatures section bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-12">
                  <h4 className="heading wow fadeInUp" data-wow-delay=".5s">
                    Who we area
                  </h4>
                  <br/>
                <div className="image wow fadeInLeft" data-wow-delay=".3s">
                  <h3>WE BUY, SELL VIRTUAL FUNDS AND UTILITY BILLS PAYMENT</h3>
                </div>
                <br/><br/>
                    <p style={{fontSize: 20, textAlign:'justify'}}>
                     Zictech Technologies Limited is a registered company with the CAC Act in Federal Republic of Nigeria and with The Financial Crime Commission (EFCC), this is to give you safety when dealing with us. <br/>
                     Oza is a product of Zictech Technologies Limited and it was birthed from an idea to provide a reliable solution of a wide range of digital assets, such as <b>Paypal, Payoneer and Bitcoin</b> as well as other digital transaction.
                    </p>
              </div>
            </div>
          </div>
        </section>

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
                   Our Journey
                  </h3>
                  <p style={{fontSize: 20, textAlign:'justify'}}>
                      It began with a passion for pioneering changes in the digital economy world. We set out to redefine the landscape of earning actual value for your digital currency exchange, specializing in virtual funds (<b>Paypal, Payoneer, Bitcoin</b>) and digital utility bills payment.<br/>
The core of our mission is a commitment to providing seamless and secure virtual funds selling and buying experiences. We recognized the hard work remote workers <b>(freelances)</b> put in, in earning their virtual funds in a global community by working remotely online day-in day-out and aimed to bridge the gap by providing a platform that simplifies, reduce risk of losing money to an unknown person(s) and the complexities of virtual funds exchanging.<br/>
From day one, our focus has been on creating a trustworthy platform where users can rely on, confidently sell their virtual funds, or pay bills with ease with their virtual funds. <br/>Our user-friendly interfaces, competitive rates, secure, and swift transactions delivery has positioned us as a reliable partner in the dynamic digital world.<br/>
As we continue to grow, our journey is shaped by the relationships we build, the innovations we embrace, and the satisfaction of our users. Join us on this exciting journey as we pave the way for a new era in virtual currency earning, empowering individuals and youth across the globe <b>(African in particular)</b> to navigate the global digital economy by working remotely online with confidence, knowing they will earn actual value for their hard earned money."

                    </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="freatures section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12">
                
                <div className="content">
                  <h3 className="heading wow fadeInUp" data-wow-delay=".5s">
                   Our Core Values
                  </h3>
                  <p style={{fontSize: 20, textAlign:'justify'}}> Our values are the guiding principles that define who we are and how we operate. These values shape our culture, drive our decisions, and reflect our commitment to excellence. We are proud to stand by:
                  </p>
                  <br/>
                  <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                    
                    <h4>Innovation</h4>
                    <p style={{fontSize: 20, textAlign:'justify'}}>
                    Embracing change and fostering a culture of innovation, we constantly seek new ways to improve on our solution and stay up to date in the dynamic worlds of digital currency and exchanges.
                    </p>
                  </div>

                  <div className="single-feature wow fadeInUp" data-wow-delay=".7s">
                    
                    <h4>Credibility</h4>
                    <p style={{fontSize: 20, textAlign:'justify'}}>
                    We understand that credibility is earned through consistent integrity, reliability, and a dedication to our users' trust. We stand firm in our commitment to providing a credible platform for all your virtual funds selling and buying.
                    </p>
                  </div>

                  <div className="single-feature wow fadeInUp" data-wow-delay="0.8s">
                    <h4>Integrity</h4>
                    <p style={{fontSize: 20, textAlign:'justify'}}>
                    We prioritize transparency and honesty in all our interactions and services. Trust is the foundation of our relationships, and we uphold the highest ethical standards.
                    </p>
                  </div>

                  <div className="single-feature wow fadeInUp" data-wow-delay="0.8s">
                    <h4>Empowerment</h4>
                    <p style={{fontSize: 20, textAlign:'justify'}}>
                    We believe in the power of a connected community. By fostering a supportive and inclusive environment, we aim to create a space where ideas flourish, individuals being financial empowered and relationships thrive.
                    </p>
                  </div>

                    <div className="single-feature wow fadeInUp" data-wow-delay="0.8s">

                    <h4>Reliability</h4>
                    <p style={{fontSize: 20, textAlign:'justify'}}>
                    We strive for unwavering consistency in our services. We understand the importance of a reliable solution, from transaction processing to customer support, our users can rely on a consistent and dependable user experience each time they engage with our platform.
                    </p>
                  </div>
 
                </div>
              </div>
              <div className="col-lg-5 col-12">
                <div className="image wow fadeInLeft" data-wow-delay=".3s">
                  <img src="assets/images/features/feature-img.png" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <section className="team section bg-white">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">
                    Our Team
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s" style={{fontSize: 20, textAlign:'justify'}}>
                  our success is a collective effort driven by a dynamic and skilled team members. Each member contributes unique talents and expertise, working together to shape our vision and redefine the landscape of virtual sales and eliminating the risk of losing values for their money.
                  </p>
                </div>
                <p style={{fontSize: 20, textAlign:'justify'}}>Our passion meets expertise, and innovation merges with reliability. Together, we are committed to delivering a cutting-edge platform that empowers users in the realms of virtual funds and exchanges.</p>
              </div>
            </div>
            {/* <div className="row">
              <div
                className="col-lg-3 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-team">
                  <div className="team-image">
                    <img src="assets/images/team/team4.jpg" alt="#" />
                  </div>
                  <div className="content">
                    <h4>
                      Deco Milan
                      <span>Founder</span>
                    </h4>
                    <ul className="social">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-facebook-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-twitter-original"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-linkedin-original"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-team">
                  <div className="team-image">
                    <img src="assets/images/team/team1.jpg" alt="#" />
                  </div>
                  <div className="content">
                    <h4>
                      Liza Marko
                      <span>Developer</span>
                    </h4>
                    <ul className="social">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-facebook-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-twitter-original"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-linkedin-original"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="single-team">
                  <div className="team-image">
                    <img src="assets/images/team/team2.jpg" alt="#" />
                  </div>
                  <div className="content">
                    <h4>
                      John Smith
                      <span>Designer</span>
                    </h4>
                    <ul className="social">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-facebook-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-twitter-original"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-linkedin-original"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="single-team">
                  <div className="team-image">
                    <img src="assets/images/team/team3.jpg" alt="#" />
                  </div>
                  <div className="content">
                    <h4>
                      Amion Doe
                      <span>Co-Founder</span>
                    </h4>
                    <ul className="social">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-facebook-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-twitter-original"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-linkedin-original"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        <section className="testimonials style2 section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  {/* <h3 className="wow zoomIn" data-wow-delay=".2s">
                    Customer Reviews
                  </h3> */}
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">
                    Our Testimonials
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s" style={{fontSize: 20, textAlign:'justify'}}>
                      What users are saying about our services
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
                      <p style={{fontSize: 20, textAlign:'justify'}}>
                        “Very impressive service delivery! they made my virtual funds sales a breeze. 
                  Fast transactions and with excellent rates I'm satisfied using the platform for my virtual funds
                  sales.”
                      </p>
                    </div>
                    <div className="author">
                      <img
                        src="assets/images/testimonial/testi-1.png"
                        alt="#"
                      />
                        <h4 className="name">
                          Silva
                        <span className="deg">Online Coach</span>
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
                      <p style={{fontSize: 20, textAlign:'justify'}}>
                        “Top-notch service, it exceeded my expectations with 
                        their professionalism and commitment to user satisfaction. 
                        I sold my paypal funds on my own rates and I got my money within five minutes.”
                      </p>
                    </div>
                    <div className="author">
                      <img
                        src="assets/images/testimonial/testi-2.png"
                        alt="#"
                      />
                      <h4 className="name">
                        David
                        <span className="deg">Freelancer (Web Developer)</span>
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
                      <p style={{fontSize: 20, textAlign:'justify'}}>
                        “Provides a user-friendly experience and a competitive rates. 
                        Good customers support, reliability and swift transactions 
                        delivery make them stand out in the market. <br/>Give it a try.”
                      </p>
                    </div>
                    <div className="author">
                      <img
                        src="assets/images/testimonial/testi-3.png"
                        alt="#"
                      />
                      <h4 className="name">
                        Sonia
                        <span className="deg">Article Writer</span>
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
                      <p style={{fontSize: 20, textAlign:'justify'}}>
                        “Outstanding platform, consistently exceeds my expectations. 
                        I deal with them regularly and their dedication to excellence service, competitive rates makes them my go-to for seamless and reliable transactions..”
                      </p>
                    </div>
                    <div className="author">
                      <img
                        src="assets/images/testimonial/testi-4.png"
                        alt="#"
                      />
                      <h4 className="name">
                        Mary J
                        <span className="deg">Developer</span>
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
                      <p style={{fontSize: 20, textAlign:'justify'}}>
                        “They offers unparalleled reliability and professionalism. 
                        Swift transactions, a high competitive rates and customer satisfaction set them apart.
                        I will continue using the platform”
                      </p>
                    </div>
                    <div className="author">
                      <img
                        src="assets/images/testimonial/testi-5.png"
                        alt="#"
                      />
                      <h4 className="name">
                        Lola M
                        <span className="deg">Data Analyst </span>
                      </h4>
                    </div>
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

export default About;
