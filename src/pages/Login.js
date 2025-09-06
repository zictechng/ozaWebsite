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
import IsValidEmail from "../component/EmailValidation";

const Login = () => {
    
  const navigate = useNavigate();
  const { state } = useLocation();

  const [userPassword, setUserPassword] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const closeModal = () =>{
    setShowModal(false);
    setShowLoader(false) 
  }
     // process the data to backend api call
     const processLogin = async() => {
      
      if(userPassword == '' || userPassword == undefined){
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
        "username": userEmail,
        "password": userPassword,
      }
      //console.log("Sending...", sendData)
      try {
        const res = await client.post(`/api/login`, sendData, {
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
                  <h1 className="page-title">Login</h1>
                  <ul className="breadcrumb-nav">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>User Login</li>
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
                      <h3>Login </h3>
                      <p>
                        To access your personal account <b>Please</b> Login to continue.
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

                    <div className="input-head">
                      <div className="form-group input-group">
                        <label>
                          <i className="lni lni-lock-alt"></i>
                        </label>
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Enter password"
                          required
                          value={userPassword}
                          onChange={(e) => setUserPassword(e.target.value)}
                        />
                      </div>
                    </div>
                   
                    <div className="button" style={{marginTop: 20}}>
                      <button className="btn"
                      onClick={() => processLogin()}>
                        {showLoader ? <>
                        <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                          />{" "}
                          Processing...
                      </> : 'Login'}
                      </button>
                    </div>
                    <h4 className="create-account">
                      I forget my login details <a href="/forget-password">Click here</a>
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
          <Modal.Title>Login Successfully</Modal.Title>
            </Modal.Header>
                <Modal.Body style={{ fontSize: 20 }}>You can now access your account details OR you can also access via the mobile app! <br/>Thank you.
                </Modal.Body>
                <Modal.Footer>
                    <a href='/'><Button className="btn">Okay, continue</Button></a>
                </Modal.Footer>
        
          </Modal>
        <FooterNote />
      </Fragment>
    </>
  );
};

export default Login;
