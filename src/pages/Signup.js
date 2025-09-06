import React, { Fragment, useEffect, useState } from "react";
import MenuBar from "../component/Menu";
import FooterNote from "../component/Footer";

import { Bounce, ToastContainer, toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import 'react-toastify/dist/ReactToastify.css';
import client from "../component/client";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import IsValidEmail from "../component/EmailValidation";
import IsValidPhoneNumber from "../component/phoneValidation";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const Signup = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState({});

  const handleOnChange = (value, countryData) => {
    setPhone(value);
    setCountry(countryData); // Selected country data
  };


  // function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setShowLoader(false) 
  }

  const handlePhoneFieldChange = (e) => {
    const value = e.target.value;

    // Allow only numbers and limit input to 11 digits
    if (value === '' || (/^\d+$/.test(value) && value.length <= 11)) {
      setUserPhone(value);
    }
  };

  // function to confirm if user filled the from correctly
  // submit contact form here by checking details
  const submitRegForm  = () =>{
    
    if(fullName === '' || userPhone === '' || userEmail === '' || userPassword === '' || userConfirmPassword === ''){
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
      else if (phone == '') {
        toast.error('Please select country and try again', {
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
      else if(fullName !== '' && userPhone !== '' && userEmail !== '' && userPassword !== ''){
        setShowModal(true);
        }
     }

  // function to process the registration
  const processRegistration = async() => {
    setShowLoader(true)
      const sendData ={
        "display_name": fullName,
        "email": userEmail,
        "phone": "+"+ phone + userPhone,
        "password": userPassword,
        "share_code": referralCode,
        "confirm_password": userConfirmPassword,
        "user_country": country.name,
      }
        if(!IsValidEmail(userEmail)){
        toast.error("Please enter a valid email",
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
          setShowModal(false);
          setShowLoader(false) 
        return
          }
       
        if(!IsValidPhoneNumber(userPhone)){
          toast.error("Phone number not more than 11 digits",
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
            setShowModal(false);
            setShowLoader(false) 
          return
          }

        if(userConfirmPassword !== userPassword){
            toast.error("Password do not match",
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
              setShowModal(false);
              setShowLoader(false) 
            return
          }

      console.log("Sending...", sendData)
      try {
        const res = await client.post(`/api/register`, sendData, {
        })
        if(res.data.msg ==='201'){
          toast.success('Registration was successful',
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
                setUserEmail("")
                setUserPhone("")
                setUserPassword("")
                setUserConfirmPassword("");

              navigate('/verify-account', { state: {userEmailId: userEmail} } );
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
        else if(res.data.status =='409'){
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
          else if(res.data.status =='403'){
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
                  <h1 className="page-title">Sign Up</h1>
                  <ul className="breadcrumb-nav">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Sign Up</li>
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
                      <h3>Sign Up Now</h3>
                      <p>Join thousands of user to experience seamless, reliable and competitive rates selling virtual funds.</p>
                    </div>
                    <div className="alt-option">
                      <span className="small-title">
                        Download the app from app store
                      </span>
                      <a href="https://play.google.com/store/apps/details?id=com.ozaapp.mobile" className="option-button btn">
                        
                        Download Mobile App
                      </a>
                    </div>
                    <div className="or">
                      <span>Or</span>
                      
                    </div>
                    <div className="title">
                     <p>Create a free account to get started</p>
                    </div>
                    
                    <div className="input-head">
                        <div className="col-lg-12 col-12">
                          <div className="form-group input-group">
                            <label>
                              <i className="lni lni-user"></i>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Your Full Name"
                              value={fullName}
                              required="required"
                              onChange={(e) => setFullName(e.target.value)}
                            />
                          </div>
                        </div>
                      <div className="row">
                        
                        <div className="col-lg-6 col-12">
                          <div className="form-group input-group">
                            <label>
                              <i className="lni lni-envelope"></i>
                            </label>
                            <input
                              className="form-control"
                              type="email"
                              placeholder="Your email"
                              value={userEmail}
                              required="required"
                              onChange={(e) => setUserEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div className="form-group input-group">
                              <label>
                                <i className="lni lni-code"></i>
                              </label>
                              <input
                                className="form-control"
                                type="number"
                                placeholder="Ref Code (Optional)"
                                value={referralCode}
                                onChange={(e) => setReferralCode(e.target.value)}
                              />
                            </div>
                        </div>
                      </div>

                      <div className="row">
                      <label>Select Country</label>
                        <div className="col-lg-6 col-12">
                        <div className="form-group input-group">
                        <PhoneInput
                          country={'us'} // Default country
                          value={phone}
                          onChange={handleOnChange}
                          enableSearch={true}
                          placeholder="Country Name"
                        />
                        </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div className="form-group input-group">
                            <label>
                              <i className="lni lni-phone"></i>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Phone Number"
                              maxLength={11}
                              value={userPhone}
                              required="required"
                              onChange={handlePhoneFieldChange}
                            />
                          </div>
                        </div>
                        
                      </div>

                      <div className="row">
                          {/* <input
                              className="form-control"
                              type="text"
                              placeholder="Phone Code (+234)"
                              maxLength={5}
                              value={country.dialCode? country.dialCode: phoneCode}
                              required="required"
                              onChange={(e) => setPhoneCode(e.target.value)}
                            /> */}
                          {country && country.name && (
                          <div className="col-lg-6 col-12">
                            <div className="form-group input-group">
                            <p> {country.name}</p>
                            {/* <p><strong>Country Code:</strong> +{country.dialCode}</p>
                            <p><strong>ISO2 Code:</strong> {country.countryCode}</p> */}
                            </div>
                          </div>
                          )}
                        
                      </div>

                      <div className="form-group input-group">
                        <label>
                          <i className="lni lni-lock-alt"></i>
                        </label>
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Your password"
                          required
                          value={userPassword}
                          onChange={(e) => setUserPassword(e.target.value)}
                        />
                      </div>

                      <div className="form-group input-group">
                        <label>
                          <i className="lni lni-lock-alt"></i>
                        </label>
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Confirm password"
                          required
                          value={userConfirmPassword}
                          onChange={(e) => setUserConfirmPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="button">
                      <button className="btn" onClick={() => submitRegForm()}>
                        Create Account
                      </button>
                    </div>
                    <h4 className="create-account">
                      Forget password? <Link to={'/forget-password'}> Reset</Link>
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
          <Modal.Title>Attention!</Modal.Title>
        </Modal.Header>
          <Modal.Body><p>By signup, you agree to the users policy of the company.</p></Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal} disabled={showLoader}>
                Close
              </Button>
                <Button className="btn" onClick={processRegistration} disabled={showLoader}>
                 {showLoader ? <>
                  <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                    />{" "}
                  Processing...
                </> : 'Continue'}
              </Button>
            </Modal.Footer>
        
        </Modal>

        <FooterNote/>
      </Fragment>
    </>
  );
};

export default Signup;
