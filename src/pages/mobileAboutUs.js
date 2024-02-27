import React, { Fragment, useEffect, useState } from 'react';
import FooterNote from '../component/Footer';
import Parser from 'html-react-parser';
import Spinner from 'react-bootstrap/Spinner';
import client from '../component/client';
import MobileMenuBar from '../component/mobileMenu';

const MobileAboutUs = () => {

  const [showLoader, setShowLoader] = useState(false);
  const [privacyData, setPrivacyData] = useState('');

  const aboutUsData = async() => {
      
    setShowLoader(true)
    //console.log("Sending...", sendData)
    try {
      const res = await client.get(`/api/fetchAboutCompany`)
      // eslint-disable-next-line eqeqeq
      if(res.data.msg =='200'){
        //console.log("data ", res.data.infoData.company_privacy_policy) 
        setPrivacyData(res.data.infoData.company_desc)
          }
        else if(res.data.status =='500'){
          console.log("error ", res.data)  
          }
        } catch (error) {
          console.log(error.message)
        }
        finally{
          setShowLoader(false)
          
        }
  }

    useEffect(() => {
      aboutUsData()
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
        {/* <MenuBar /> */}
        <MobileMenuBar />
        
        <div className="contact-us section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12">
                <div className="contact-widget-wrapper">
                  <div className="main-title">
                    <h2>About Us</h2>
                      {showLoader ? 
                      <div className='d-flex justify-content-center'>
                        <Spinner
                          as="span"
                          animation="border"
                          size="large"
                          role="status"
                          color='#1D2667'
                          aria-hidden="true"
                         />
                      </div>:
                      <p style={{fontSize: 18, textAlign:'justify'}}>    
                        {Parser(privacyData)}
                      </p>
                    }
                    </div>
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </Fragment>
    </>
  );
}

export default MobileAboutUs;
