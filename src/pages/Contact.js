import React, { Fragment, useEffect, useState } from "react";
import MenuBar from "../component/Menu";
import FooterNote from "../component/Footer";
import { Link } from "react-router-dom";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import 'react-toastify/dist/ReactToastify.css';
import client from "../component/client";


const Contact = () => {

  const [fullName, setFullName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  // submit contact form here by checking details
  const submitCOntactForm  = () =>{
    
    if(fullName === '' || contactPhone === '' || contactEmail === '' || contactMessage === ''){
      toast.error('All fields required', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        return
      }
      else if(fullName !== '' && contactPhone !== '' && contactEmail !== '' && contactMessage !== ''){
        setShowModal(true);
        }
     }
     // process the data to backend api call
    const processMessage = async() => {
      
      setShowLoader(true)
      const sendData ={
        "customer_name": fullName,
        "customer_email": contactEmail,
        "customer_phone": contactPhone,
        "customer_message": contactMessage,
      }
      //console.log("Sending...", sendData)
      try {
        const res = await client.post(`/api/submit_ticketWebsite`, sendData, {
        })
        if(res.data.msg ==='200'){
          toast.success('Message sent successfully',
              {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                transition: Bounce,
                newestOnTop: false,
                theme: "light",
                });
                setFullName("")
                setContactEmail("")
                setContactMessage("")
                setContactPhone("")
            }
          else if(res.data.status ==='500'){
            toast.error(res.data.message, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
            }
          } catch (error) {
            console.log(error.message)
          }
          finally{
            setShowLoader(false)
            setShowModal(false);
          }
    }

    // close confirm modal
    const closeModal = () =>{
      setShowModal(false);
      setShowLoader(false)   
    }

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
        <ToastContainer/>
        <div className="breadcrumbs">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                <div className="breadcrumbs-content">
                  <h1 className="page-title">Contact Us</h1>
                  <ul className="breadcrumb-nav">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-us section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="contact-widget-wrapper">
                  <div className="main-title">
                    <h2>Contact Us</h2>
                    <p style={{fontSize: 20, textAlign:'justify'}}>
                      Our friendly technical and customer support team are available 24/7, feel free to reach out to us!  We will be glad to hear from you.
                    </p>
                  </div>
                  <div className="contact-widget-block">
                    <h3 className="title">Call us</h3>
                    <p style={{fontSize: 20, textAlign:'justify'}}> 
                    <i className="lni lni-whatsapp"></i> +234 912 8091 031</p>
                    <p style={{fontSize: 20, textAlign:'justify'}}> 
                    <i className="lni lni-whatsapp"></i> +44 738 964 6157</p>
                  </div>
                  <div className="contact-widget-block">
                    <h3 className="title">Technical Support</h3>
                    <p>
                    <Link to='#'
                      onClick={() => window.location = 'mailto:support@oza.com'} >support@oza.com</Link>
                    </p>
                    
                  </div>
                  <div className="contact-widget-block">
                    <h3 className="title">Sales Support</h3>
                    <p>
                    <Link to='#'
                      onClick={() => window.location = 'mailto:hello@oza.com'} >hello@oza.com</Link>
                    </p>
                    
                  </div>
                  {/* <div className="contact-widget-block">
                    <h3 className="title">Our Address</h3>
                    <p>34 Madison Street,</p>
                    <p>NY, USA 10005</p>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="contact-form">
                  <h3 className="form-title">You wish to write us? drop message</h3>
                    <p>
                     
                    </p>
                    {/* Contact form here */}
                    <form onSubmit={e => e.preventDefault()}
                    className="form">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <input
                            name="name"
                            type="text"
                            placeholder="Name*"
                            value={fullName}
                            required="required"
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <input
                            name="phone"
                            type="phone"
                            placeholder="Phone*"
                            value={contactPhone}
                            required="required"
                            onChange={(e) => setContactPhone(e.target.value.trim())}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6 col-12">
                        <div className="form-group">
                          <input
                            name="email"
                            type="email"
                            value={contactEmail}
                            placeholder="Email*"
                            required="required"
                            onChange={(e) => setContactEmail(e.target.value.trim())}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            placeholder="Message*"
                            name="message"
                            id="message-area"
                            className="form-control"
                            value={contactMessage}
                            onChange={(e) => setContactMessage(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="button">
                          <button className="btn"
                           onClick={() => submitCOntactForm()}>
                            Send Message
                          </button>
                          
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
          
          {/* map here */}
        <div className="map-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mapouter">
                  <div className="gmap_canvas">
                  <iframe 
                  title="contact_map"
                  width="100%"
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7649551438844!2d7.36824158169044!3d8.993762968580084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e73cb22c294f1%3A0xc9d3307b2865e722!2sSector%20F!5e0!3m2!1sen!2suk!4v1709034624123!5m2!1sen!2suk" 
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  allowfullscreen="" 
                  loading="lazy">

                  </iframe>
                   {/* <iframe
                      title="contact_map"
                      width="100%"
                      height="500"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                    ></iframe> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* confirm modal */}
        <Modal show={showModal} 
        onHide={closeModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}>
          <Modal.Header>
          <Modal.Title>Attention!</Modal.Title>
        </Modal.Header>
          <Modal.Body><p>By submitting this form, you agree to the company terms and conditions!</p></Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal} disabled={showLoader}>
                Close
              </Button>
                <Button className="btn" onClick={processMessage} disabled={showLoader}>
                 {showLoader ? <>
                  <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                    />{" "}
                  Processing...
                </> : 'Send Message'}
              </Button>
            </Modal.Footer>
        
        </Modal>
        
        <FooterNote/>
      </Fragment>
    </>
  );
};

export default Contact;
