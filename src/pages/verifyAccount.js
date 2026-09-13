import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import client from '../component/client';
import useAppInfo from '../component/useAppInfo';

const VerifyAccount = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { appName, appLogo } = useAppInfo();

  const [userOTP, setUserOTP] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [resendLoader, setResendLoader] = useState(false);
  const [verified, setVerified] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  useEffect(() => {
    if (!state?.userEmailId) navigate('/signup');
    document.title = `Verify Account — ${appName}`;
  }, [state, navigate, appName]);

  const handleOtpChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setUserOTP(newOtp.join(''));
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const activateAccount = async () => {
    const code = otp.join('');
    if (code.length !== 6) {
      toast.error('Please enter the complete 6-digit OTP code');
      return;
    }
    setShowLoader(true);
    try {
      const res = await client.post('/api/otp_verify', {
        otp_code: code,
        user_email: state?.userEmailId,
      });
      if (res.data.msg === '200') {
        setVerified(true);
      } else {
        toast.error(res.data.message || 'Invalid OTP. Please try again.');
        setOtp(['', '', '', '', '', '']);
        setUserOTP('');
        document.getElementById('otp-0')?.focus();
      }
    } catch {
      toast.error('Connection error. Please try again.');
    } finally {
      setShowLoader(false);
    }
  };

  const resendOTP = async () => {
    setResendLoader(true);
    try {
      const res = await client.post('/api/resend_otp', { user_email: state?.userEmailId });
      if (res.data.msg === '200') {
        toast.success('A new OTP has been sent to your email');
        setOtp(['', '', '', '', '', '']);
        setUserOTP('');
      } else {
        toast.error(res.data.message || 'Failed to resend OTP');
      }
    } catch {
      toast.error('Connection error. Please try again.');
    } finally {
      setResendLoader(false);
    }
  };

  return (
    <Fragment>
      <ToastContainer position="top-right" autoClose={4000} theme="colored" />
      <div style={{ minHeight: '100vh', background: '#F8FAFF', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ width: '100%', maxWidth: '440px' }}>

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
            textAlign: 'center',
          }}>
            {verified ? (
              <>
                <div style={{ fontSize: '56px', marginBottom: '16px' }}>🎉</div>
                <h2 style={{ fontWeight: 800, color: '#1A1F36', fontSize: '1.5rem', marginBottom: '12px' }}>
                  Account Verified!
                </h2>
                <p style={{ color: '#718096', fontSize: '15px', lineHeight: 1.8, marginBottom: '32px' }}>
                  Your account has been successfully verified.
                  Download the {appName} app to get started or sign in from the web.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a href="/#" style={{
                    background: '#4C5FD5', color: '#fff', padding: '13px',
                    borderRadius: '10px', fontWeight: 700, fontSize: '15px',
                    textDecoration: 'none', display: 'block',
                  }}>📱 Download the App</a>
                  <Link to="/login" style={{
                    background: '#F8FAFF', color: '#4C5FD5', padding: '13px',
                    borderRadius: '10px', fontWeight: 600, fontSize: '15px',
                    textDecoration: 'none', display: 'block', border: '1px solid #e8edf5',
                  }}>Sign In →</Link>
                </div>
              </>
            ) : (
              <>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '16px',
                  background: '#EEF2FF', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '28px', margin: '0 auto 20px',
                }}>📧</div>
                <h2 style={{ fontWeight: 800, color: '#1A1F36', fontSize: '1.4rem', marginBottom: '8px' }}>
                  Check your email
                </h2>
                <p style={{ color: '#718096', fontSize: '14px', lineHeight: 1.7, marginBottom: '8px' }}>
                  We sent a 6-digit verification code to
                </p>
                <p style={{ color: '#4C5FD5', fontWeight: 700, fontSize: '15px', marginBottom: '32px' }}>
                  {state?.userEmailId}
                </p>

                {/* OTP boxes */}
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '28px' }}>
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      id={`otp-${i}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={e => handleOtpChange(e.target.value, i)}
                      onKeyDown={e => handleOtpKeyDown(e, i)}
                      style={{
                        width: '48px', height: '56px', textAlign: 'center',
                        fontSize: '1.4rem', fontWeight: 800, color: '#1A1F36',
                        border: `2px solid ${digit ? '#4C5FD5' : '#e2e8f0'}`,
                        borderRadius: '12px', outline: 'none',
                        background: digit ? '#EEF2FF' : '#fff',
                        transition: 'all 0.2s', fontFamily: 'inherit',
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={activateAccount}
                  disabled={showLoader || otp.join('').length !== 6}
                  style={{
                    width: '100%', padding: '14px', background: '#4C5FD5',
                    color: '#fff', border: 'none', borderRadius: '10px',
                    fontWeight: 700, fontSize: '15px', cursor: 'pointer',
                    opacity: (showLoader || otp.join('').length !== 6) ? 0.6 : 1,
                    fontFamily: 'inherit', marginBottom: '16px',
                  }}>
                  {showLoader ? 'Verifying...' : 'Verify Account'}
                </button>

                <p style={{ color: '#718096', fontSize: '14px' }}>
                  Didn't receive the code?{' '}
                  <button
                    onClick={resendOTP}
                    disabled={resendLoader}
                    style={{
                      background: 'none', border: 'none', color: '#4C5FD5',
                      fontWeight: 600, cursor: 'pointer', fontSize: '14px',
                      fontFamily: 'inherit', padding: 0,
                    }}>
                    {resendLoader ? 'Sending...' : 'Resend code'}
                  </button>
                </p>

                <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
                  <Link to="/signup" style={{ color: '#718096', fontSize: '14px', textDecoration: 'none' }}>
                    ← Back to signup
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

export default VerifyAccount;