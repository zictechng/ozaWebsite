import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate,   } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import UserPrivacyPolicy from '../pages/PrivacyPolicy';
import TermsCondition from '../pages/TermsCondition';
import VerifyAccount from '../pages/verifyAccount';
import ForgetPassword from '../pages/ForgetPassword';
import ResetPassword from '../pages/ResetPassword';
import Page404 from '../pages/404Page';

export default function RouterPage() {

  return (
    <div>
        <Router>
              <Routes>
                <Route path="/" Component={Home} />
                <Route path="about-us" Component={About} />
                <Route path="services" Component={Services} />
                <Route path="signup" Component={Signup} />
                <Route path="contact-us" Component={Contact} />
                <Route path="privacy-policy" Component={UserPrivacyPolicy} />
                <Route path="terms-and-conditions" Component={TermsCondition} />
                <Route path="verify-account" Component={VerifyAccount} />
                <Route path="forget-password" Component={ForgetPassword} />
                <Route path="reset-password" Component={ResetPassword}/>
                {/* <Route path="/*" element={<Navigate to='/' replace/>} /> */}
                {/* <Route path="*" element={<MissingRoute />} /> */}
                <Route path="*" Component={Page404}/>
                
            </Routes>
        </Router>
    </div>
  );
}
