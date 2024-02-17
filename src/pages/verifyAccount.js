import React, { Fragment, useEffect, useState } from 'react';
import MenuBar from '../component/Menu';
import FooterNote from '../component/Footer';

import { useNavigate, useLocation  } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { Bounce, ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import client from '../component/client';

const VerifyAccount = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  if(state?.userEmailId === null || state?.userEmailId === '' || state?.userEmailId === undefined){
    navigate('/signup');
  }
  const [userOTP, setUserOTP] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);

  //console.log(" my Data " , state?.userEmailId)

  const closeModal = () =>{
    setShowModal(false);
    setShowLoader(false) 
  }
   // function to process the registration
   const activateAccount = async() => {
    setShowLoader(true)
      const sendData ={
        "otp_code": userOTP,
        "user_email": state?.userEmailId
       }
        
        if(userOTP === '' || userOTP == null){
            toast.error("Please enter OTP Code",
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              transition: Bounce,
              newestOnTop: false,
              theme: "colored",
              });
              setShowLoader(false) 
            return
          }

        if(userOTP.length < 6 || userOTP.length > 6){
          toast.error("OTP Code should be 6 characters length",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            transition: Bounce,
            newestOnTop: false,
            theme: "colored",
            });
            setShowLoader(false) 
          return
        }

      //console.log("Sending...", sendData)
      try {
        const res = await client.post(`/api/otp_verify`, sendData, {
        })
        if(res.data.msg ==='200'){
          toast.success('Account Activated successfully! Download the app to continue',
              {
                position: "top-right",
                autoClose: 6000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                transition: Bounce,
                newestOnTop: false,
                theme: "light",
                });
                setUserOTP("")
                setShowModal(true);
              }
          else if(res.data.status =='500'){
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
          else if(res.data.status =='400'){
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
          else if(res.data.status =='401'){
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
            else if(res.data.status =='404'){
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
            }
        }

  useEffect(() => {
    if(state?.userEmailId === null || state?.userEmailId === '' || state?.userEmailId === undefined){
      navigate('/signup');
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }
    const timeoutID = window.setTimeout(fadeout,() => {
    }, 2000);
    
     return () => window.clearTimeout(timeoutID );
     
}, [navigate, state.userEmailId])

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
                  <h1 className="page-title">Verify</h1>
                  <ul className="breadcrumb-nav">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Confirm your signup details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="account-login section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                <form className="card login-form inner-content" onSubmit={e => e.preventDefault()}>
                  <div className="card-body">
                    <div className="title">
                      <h3>Verify your account</h3>
                      <p>We sent verification code <b>OTP Code</b> to your registered email address. It might take sometime to arrival, ensure to check spam box.</p>
                    </div>
                    
                    <div className="or">
                      <span></span>
                    </div>
                    <div className="input-head">
                      <div className="form-group input-group">
                        <label>
                          <i className="lni lni-lock-alt"></i>
                        </label>
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Enter the OTP Code"
                          required
                          value={userOTP}
                          onChange={(e) => setUserOTP(e.target.value)}
                        />
                      </div>
                      
                    </div>
                    <div className="button">
                    <button className="btn" onClick={() => activateAccount()} disabled={showLoader}>
                        
                      {showLoader ? <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        />{" "}
                          Verifying...
                        </> : 'Verify Account'}
                    </button>
                    </div>
                    <h4 className="create-account">
                      I don't get any email? <a href="#">Resend OTP</a>
                    </h4>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Vertically centered modal --> */}
      <Modal show={showModal} 
          onHide={closeModal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop="static"
          keyboard={false}>
          <Modal.Header>
          <Modal.Title>Account Verified</Modal.Title>
        </Modal.Header>
            <Modal.Body style={{ fontSize: 20 }}>Please, download the mobile app from the respective app stores to continue and start to enjoy the amazing offer we have for you! <br/>Thank you.
              </Modal.Body>
                <Modal.Footer>
                {/* <Button variant="secondary" onClick={closeModal}>
                Close
              </Button> */}
                <a href='/'><Button className="btn">Okay</Button></a>
            </Modal.Footer>
        
          </Modal>
        <FooterNote/>
      </Fragment>
    </>
  );
}

export default VerifyAccount;
