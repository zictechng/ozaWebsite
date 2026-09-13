import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import client from '../component/client';
import IsValidEmail from '../component/EmailValidation';
import useAppInfo from '../component/useAppInfo';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const { appName, appLogo } = useAppInfo();
  const [userEmail, setUserEmail] = useState('');
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    document.title = `Forgot Password — ${appName}`;
  }, [appName]);

    const processForget = async () => {
    if (!userEmail || userEmail.trim() === '') {
      toast.error('Please enter your email address');
      return;
    }
    if (!IsValidEmail(userEmail.trim())) {
      toast.error('Please enter a valid email address');
      return;
    }
    setShowLoader(true);
    try {
      const res = await client.post('/api/forgetPasswordMobile', { user_email: userEmail });
      if (res.data.msg === '200') {
        navigate('/reset-password', { state: { userEmailId: userEmail, otpCode: res.data.otpPin }, replace: true });
      } else {
        toast.error(res.data.message || 'Email not found. Please check and try again.');
      }
    } catch {
      toast.error('Connection error. Please try again.');
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <Fragment>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <div style={{ minHeight: '100vh', background: '#F8FAFF', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>

          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              {appLogo ? (
                <img src={appLogo} alt={appName} style={{ height: '36px' }} />
              ) : (
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, #4C5FD5, #6C63FF)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: 800, fontSize: '18px',
                }}>{appName?.charAt(0) || 'O'}</div>
              )}
              <span style={{ color: '#1A1F36', fontWeight: 800, fontSize: '20px' }}>{appName}</span>
            </Link>
          </div>

          <div style={{
            background: '#fff', borderRadius: '20px', padding: '40px',
            border: '1px solid #e8edf5', boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{
                width: '64px', height: '64px', borderRadius: '16px',
                background: '#EEF2FF', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '28px', margin: '0 auto 16px',
              }}>🔑</div>
              <h2 style={{ fontWeight: 800, color: '#1A1F36', fontSize: '1.5rem', marginBottom: '8px' }}>
                Forgot your password?
              </h2>
              <p style={{ color: '#718096', fontSize: '14px', lineHeight: 1.7 }}>
                Enter your registered email address and we will send you a reset code.
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: 600, color: '#1A1F36', fontSize: '14px', marginBottom: '8px' }}>
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={userEmail}
                onChange={e => setUserEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && processForget()}
                style={{
                  width: '100%', padding: '13px 16px', border: '1.5px solid #e2e8f0',
                  borderRadius: '10px', fontSize: '15px', outline: 'none',
                  color: '#1A1F36', background: '#fff', fontFamily: 'inherit',
                }}
              />
            </div>

            <button
              onClick={processForget}
              disabled={showLoader}
              style={{
                width: '100%', padding: '14px', background: '#4C5FD5',
                color: '#fff', border: 'none', borderRadius: '10px',
                fontWeight: 700, fontSize: '15px', cursor: 'pointer',
                opacity: showLoader ? 0.8 : 1, fontFamily: 'inherit', marginBottom: '20px',
              }}>
              {showLoader ? 'Sending reset code...' : 'Send Reset Code'}
            </button>

            <div style={{ textAlign: 'center', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
              <Link to="/login" style={{ color: '#4C5FD5', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
                ← Back to sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ForgetPassword;
