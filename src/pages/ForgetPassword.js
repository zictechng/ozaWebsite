import React, { Fragment, useEffect, useState } from "react";
import MenuBar from "../component/Menu";
import FooterNote from "../component/Footer";
import { useNavigate } from 'react-router-dom';

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import client from "../component/client";
import Spinner from 'react-bootstrap/Spinner';
import IsValidEmail from "../component/EmailValidation";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [showLoader, setShowLoader] = useState(false);


     // process the data to backend api call
     const authenticateEmail = async() => {
      
      if(userEmail.length < 1 || userEmail == undefined || userEmail == null){
        toast.error('Please email address required', {
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
        if(!IsValidEmail(userEmail)){
          toast.error('Please enter valid email address', {
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
        "user_email": userEmail,
      }
      //console.log("Sending...", sendData)
      try {
        const res = await client.post(`/api/forgetPasswordMobile`, sendData, {
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
                setUserEmail("")
            navigate('/reset-password', { state: {userEmailId: userEmail, otpCode: res.data.otpPin}, replace: true  } );
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
              toast.error('Wrong details entered', {
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
                  <h1 className="page-title">Forget Password</h1>
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
                      <h3>Forget Password</h3>
                      <p>
                        Need to reset your password? No problem! Just enter your
                        email & click the button below.
                      </p>
                    </div>
                    <div className="input-head">
                      <div className="form-group input-group">
                        <label>
                          <i className="lni lni-envelope"></i>
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          id="reg-email"
                          placeholder="Enter your email"
                          required
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="button" style={{marginTop: 20}}>
                      <button className="btn"
                      onClick={() => authenticateEmail()}>
                        {showLoader ? <>
                        <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                          />{" "}
                          Authenticating...
                      </> : 'Authenticate Email'}
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

        <FooterNote />
      </Fragment>
    </>
  );
};

export default ForgetPassword;
