import React, { Fragment, useEffect, useState } from "react";
import MenuBar from "../component/Menu";
import FooterNote from "../component/Footer";
import { useNavigate, useLocation  } from 'react-router-dom';

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import client from "../component/client";
import Spinner from 'react-bootstrap/Spinner';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ResetPassword = () => {
    
  const navigate = useNavigate();
  const { state } = useLocation();

  if(state?.userEmailId === null || state?.userEmailId === '' || state?.userEmailId === undefined){
    navigate('/forget-password');
  }
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [userOtpCode, setUserOtpCode] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () =>{
    setShowModal(false);
    setShowLoader(false) 
  }
     // process the data to backend api call
     const processUpdate = async() => {
      
      if(userPassword == '' || userPassword == undefined || userConfirmPassword == '' || userOtpCode == ''){
        toast.error('Please all fields are required', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
          return;
        }
        
    if(userPassword !== userConfirmPassword ){
        toast.error('Confirm password do not matched', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            return;
        }
    if(state?.otpCode != userOtpCode ){
        toast.error('Failed! Invalid OTP Code Entered', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            return;
        }

      setShowLoader(true)
      const sendData ={
        "userEmail": state?.userEmailId,
        "password": userPassword,
      }
      //console.log("Sending...", sendData)
      try {
        const res = await client.post(`/api/resetPasswordMobile`, sendData, {
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
                setUserConfirmPassword("")
                setUserPassword("")
                setShowModal(true);
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
          } catch (error) {
            console.log(error.message)
          }
          finally{
            setShowLoader(false)
           }
    }

  useEffect(() => {

    if(state?.userEmailId === null || state?.userEmailId === '' || state?.userEmailId === undefined){
        navigate('/forget-password');
      }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }
    const timeoutID = window.setTimeout(fadeout,() => {
    }, 2000);
 
     return () => window.clearTimeout(timeoutID );
}, [navigate, state?.userEmailId])
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
                  <h1 className="page-title">Reset Password</h1>
                  <ul className="breadcrumb-nav">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Reset Password</li>
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
                      <h3>Reset Password {state?.otpCode}</h3>
                      <p>
                        Need to reset your password? Choose new password details and enter the <b>OTP Code</b> sent to your email and click Reset Password button.
                      </p>
                    </div>
                    <div className="input-head">
                      <div className="form-group input-group">
                        <label>
                          <i className="lni lni-lock-alt"></i>
                        </label>
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Enter new password"
                          required
                          value={userPassword}
                          onChange={(e) => setUserPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="input-head">
                      <div className="form-group input-group">
                        <label>
                          <i className="lni lni-lock-alt"></i>
                        </label>
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Enter confirmation password"
                          required
                          value={userConfirmPassword}
                          onChange={(e) => setUserConfirmPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="input-head">
                      <div className="form-group input-group">
                        <label>
                          <i className="lni lni-code"></i>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter OTP Code"
                          required
                          value={userOtpCode}
                          maxLength={6}
                          onChange={(e) => setUserOtpCode(e.target.value.trim())}
                        />
                      </div>
                    </div>
                    <div className="button" style={{marginTop: 20}}>
                      <button className="btn"
                      onClick={() => processUpdate()}>
                        {showLoader ? <>
                        <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                          />{" "}
                          Processing...
                      </> : 'Reset Password'}
                      </button>
                    </div>
                    <h4 className="create-account">
                      I remember my password <a href="/">Click here</a>
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
          <Modal.Title>Password Updated Successfully</Modal.Title>
            </Modal.Header>
                <Modal.Body style={{ fontSize: 20 }}>You can now login with your new details via the mobile app! <br/>Thank you.
                </Modal.Body>
                <Modal.Footer>
                    <a href='/'><Button className="btn">Okay</Button></a>
                </Modal.Footer>
        
          </Modal>
        <FooterNote />
      </Fragment>
    </>
  );
};

export default ResetPassword;
