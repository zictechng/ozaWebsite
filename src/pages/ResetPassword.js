import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import client from '../component/client';
import useAppInfo from '../component/useAppInfo';

const ResetPassword = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { appName, appLogo } = useAppInfo();

  const [userOtpCode, setUserOtpCode] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfirmPassword, setUserConfirmPassword] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [resetDone, setResetDone] = useState(false);

  useEffect(() => {
    if (!state?.userEmailId) navigate('/forget-password');
    document.title = `Reset Password — ${appName}`;
  }, [state, navigate, appName]);

  const processReset = async () => {
    if (!userOtpCode || !userPassword || !userConfirmPassword) {
      toast.error('All fields are required'); return;
    }
    if (userPassword !== userConfirmPassword) {
      toast.error('Passwords do not match'); return;
    }
    if (userPassword.length < 6) {
      toast.error('Password must be at least 6 characters'); return;
    }
    setShowLoader(true);
    try {
      const res = await client.post('/api/resetPasswordMobile', {
        otp_code: userOtpCode,
        user_email: state?.userEmailId,
        new_password: userPassword,
        confirm_password: userConfirmPassword,
      });
      if (res.data.msg === '200') {
        setResetDone(true);
      } else {
        toast.error(res.data.message || 'Reset failed. Please check your OTP and try again.');
      }
    } catch {
      toast.error('Connection error. Please try again.');
    } finally {
      setShowLoader(false);
    }
  };

  const inputStyle = {
    width: '100%', padding: '13px 16px', border: '1.5px solid #e2e8f0',
    borderRadius: '10px', fontSize: '15px', outline: 'none',
    color: '#1A1F36', background: '#fff', fontFamily: 'inherit',
  };

  return (
    <Fragment>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <div style={{ minHeight: '100vh', background: '#F8FAFF', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>

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
            {resetDone ? (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '56px', marginBottom: '16px' }}>✅</div>
                <h2 style={{ fontWeight: 800, color: '#1A1F36', fontSize: '1.4rem', marginBottom: '12px' }}>
                  Password Reset Successful
                </h2>
                <p style={{ color: '#718096', fontSize: '15px', lineHeight: 1.8, marginBottom: '28px' }}>
                  Your password has been updated. You can now sign in with your new password.
                </p>
                <Link to="/login" style={{
                  display: 'block', background: '#4C5FD5', color: '#fff', padding: '13px',
                  borderRadius: '10px', fontWeight: 700, fontSize: '15px', textDecoration: 'none',
                }}>Sign In →</Link>
              </div>
            ) : (
              <>
                <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '16px',
                    background: '#EEF2FF', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '28px', margin: '0 auto 16px',
                  }}>🔐</div>
                  <h2 style={{ fontWeight: 800, color: '#1A1F36', fontSize: '1.4rem', marginBottom: '8px' }}>
                    Reset your password
                  </h2>
                  <p style={{ color: '#718096', fontSize: '14px' }}>
                    Enter the OTP sent to <strong>{state?.userEmailId}</strong> and your new password.
                  </p>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontWeight: 600, color: '#1A1F36', fontSize: '14px', marginBottom: '8px' }}>
                    OTP Code
                  </label>
                  <input type="text" placeholder="Enter 6-digit OTP"
                    value={userOtpCode} onChange={e => setUserOtpCode(e.target.value)}
                    maxLength={6} style={{ ...inputStyle, textAlign: 'center', letterSpacing: '8px', fontSize: '1.2rem', fontWeight: 700 }} />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontWeight: 600, color: '#1A1F36', fontSize: '14px', marginBottom: '8px' }}>
                    New Password
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input type={showPassword ? 'text' : 'password'} placeholder="Min. 6 characters"
                      value={userPassword} onChange={e => setUserPassword(e.target.value)}
                      style={inputStyle} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} style={{
                      position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)',
                      background: 'none', border: 'none', cursor: 'pointer', color: '#a0aec0', fontSize: '13px',
                    }}>{showPassword ? 'Hide' : 'Show'}</button>
                  </div>
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <label style={{ display: 'block', fontWeight: 600, color: '#1A1F36', fontSize: '14px', marginBottom: '8px' }}>
                    Confirm New Password
                  </label>
                  <input type={showPassword ? 'text' : 'password'} placeholder="Re-enter new password"
                    value={userConfirmPassword} onChange={e => setUserConfirmPassword(e.target.value)}
                    style={inputStyle} />
                </div>

                <button onClick={processReset} disabled={showLoader} style={{
                  width: '100%', padding: '14px', background: '#4C5FD5',
                  color: '#fff', border: 'none', borderRadius: '10px',
                  fontWeight: 700, fontSize: '15px', cursor: 'pointer',
                  opacity: showLoader ? 0.8 : 1, fontFamily: 'inherit', marginBottom: '16px',
                }}>
                  {showLoader ? 'Resetting...' : 'Reset Password'}
                </button>

                <div style={{ textAlign: 'center', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                  <Link to="/forget-password" style={{ color: '#718096', fontSize: '14px', textDecoration: 'none' }}>
                    ← Request a new OTP
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
