import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import client from './component/client';
import RouterPage from './route/RouterPage';

function App() {
  const [showLoader, setShowLoader] = useState(false);
  // function to get company details
  
  const getCompanyDetails = async() => {
    setShowLoader(true);
    try {
      const res = await client.get(`/api/company_name`, {
      })
      //console.log(res.data)
      if(res.data){
        //console.log(res.data)
        localStorage.setItem("CompanyName", JSON.stringify(res.data.app_name));
        localStorage.setItem("CompanyBaseUrl", JSON.stringify(res.data.app_baseurl));
        localStorage.setItem("CompanyShortInfo", JSON.stringify(res.data.app_short_name));
        localStorage.setItem("CompanyAppTitle", JSON.stringify(res.data.app_launch_title));
        }
        
        } catch (error) {
          console.log(error.message)
        }
        finally{
          setShowLoader(false)
         }
  }

  useEffect(() => {
    getCompanyDetails();

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }
    const timeoutID = window.setTimeout(fadeout,() => {
    }, 2000);
 
     return () => window.clearTimeout(timeoutID );
}, [])

  return (
    <div className="App">
      {/* This is traditional single way of routing... */}
      {/* <Router>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/about-us' Component={About} />
          <Route path='/services' Component={Services} />
          <Route path='/signup' Component={Signup} />
          <Route path='/contact-us' Component={Contact} />
          <Route path='/privacy-policy' Component={UserPrivacyPolicy} />
          <Route path='/terms-and-conditions' Component={TermsCondition} />
          <Route path='/verify-account' Component={VerifyAccount} />
          <Route path='/forget-password' Component={ForgetPassword} />
          <Route path='/reset-password' Component={ResetPassword} />
        </Routes>
      </Router> */}

      {/* Here we use functional/model way to organized our routing system in the application */}
        <RouterPage />
    </div>
  );
}

export default App;
