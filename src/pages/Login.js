/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';
import client from '../component/client';
import IsValidEmail from '../component/EmailValidation';
import useAppInfo from '../component/useAppInfo';

const Login = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { appName, appLogo } = useAppInfo();

  const [userEmail, setUserEmail] = useState(state?.userEmailId || '');
  const [userPassword, setUserPassword] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [ssoToken, setSsoToken] = useState('');

  const processLogin = async () => {
    if (!userEmail || !userPassword) {
      toast.error('All fields are required');
      return;
    }
    if (!IsValidEmail(userEmail)) {
      toast.error('Please enter a valid email address');
      return;
    }
    setShowLoader(true);
    try {
      const res = await client.post('/api/login', {
        username: userEmail,
        password: userPassword,
      });
      if (res.data.msg === '200') {
        // Encode the full API response as a base64 URL param — same shape Redux expects
        const ssoPayload = btoa(JSON.stringify(res.data));
        setSsoToken(ssoPayload);       // store for use in modal button
        setUserEmail('');
        setUserPassword('');
        setShowModal(true);
      } else {
        toast.error(res.data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      toast.error('Connection error. Please try again.');
    } finally {
      setShowLoader(false);
    }
  };

  useEffect(() => {
    document.title = `Sign In — ${appName}`;
  }, [appName]);

  const inputStyle = {
    width: '100%', padding: '13px 16px 13px 44px',
    border: '1.5px solid #e2e8f0', borderRadius: '10px',
    fontSize: '15px', outline: 'none', color: '#1A1F36',
    background: '#fff', transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  };

  return (
    <Fragment>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

      <div style={{ display: 'flex', minHeight: '100vh' }}>

        {/* ── Left Panel — Branded ── */}
        <div style={{
          width: '45%', background: 'linear-gradient(135deg, #0F1629 0%, #1a2547 60%, #4C5FD5 100%)',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          padding: '48px 56px', position: 'relative', overflow: 'hidden',
        }} className="d-none d-lg-flex">

          {/* Background decoration */}
          <div style={{
            position: 'absolute', top: '-120px', right: '-120px',
            width: '400px', height: '400px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(76,95,213,0.3) 0%, transparent 70%)',
          }} />
          <div style={{
            position: 'absolute', bottom: '-80px', left: '-80px',
            width: '300px', height: '300px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(108,99,255,0.2) 0%, transparent 70%)',
          }} />

          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px', zIndex: 2 }}>
            {appLogo ? (
              <img src={appLogo} alt={appName} style={{ height: '40px', width: 'auto' }} />
            ) : (
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'rgba(255,255,255,0.15)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontWeight: 800, fontSize: '18px',
              }}>{appName?.charAt(0) || 'O'}</div>
            )}
            <span style={{ color: '#fff', fontWeight: 800, fontSize: '20px' }}>{appName}</span>
          </Link>

          {/* Center content */}
          <div style={{ zIndex: 2 }}>
            <h2 style={{
              color: '#fff', fontSize: '2rem', fontWeight: 800,
              lineHeight: 1.3, marginBottom: '20px', letterSpacing: '-0.02em',
            }}>
              Welcome back.<br />
              <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 400, fontSize: '1.4rem' }}>
                Your wallet is waiting.
              </span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: 1.8, maxWidth: '340px' }}>
              Sign in to buy airtime, data, pay bills, sell PayPal, Payoneer or Bitcoin — all from one place.
            </p>

            {/* Feature pills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '36px' }}>
              {[
                { icon: '⚡', text: 'Transactions settled in seconds' },
                { icon: '🔒', text: 'Bank-grade encrypted security' },
                { icon: '💰', text: 'Best virtual funds rates in Nigeria' },
              ].map((f, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  background: 'rgba(255,255,255,0.07)', borderRadius: '10px', padding: '12px 16px',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  <span style={{ fontSize: '18px' }}>{f.icon}</span>
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', fontWeight: 500 }}>{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', zIndex: 2 }}>
            © {new Date().getFullYear()} {appName}. All rights reserved.
          </div>
        </div>

        {/* ── Right Panel — Form ── */}
        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',
          padding: '48px 24px', background: '#F8FAFF',
        }}>
          {/* Mobile logo */}
          <Link to="/" style={{
            textDecoration: 'none', display: 'flex', alignItems: 'center',
            gap: '10px', marginBottom: '32px',
          }} className="d-flex d-lg-none">
            <div style={{
              width: '36px', height: '36px', borderRadius: '8px',
              background: 'linear-gradient(135deg, #4C5FD5, #6C63FF)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 800, fontSize: '16px',
            }}>{appName?.charAt(0) || 'O'}</div>
            <span style={{ color: '#1A1F36', fontWeight: 800, fontSize: '18px' }}>{appName}</span>
          </Link>

          <div style={{ width: '100%', maxWidth: '420px' }}>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1A1F36', marginBottom: '8px', letterSpacing: '-0.02em' }}>
              Sign in to your account
            </h1>
            <p style={{ color: '#718096', fontSize: '15px', marginBottom: '36px' }}>
              Don't have an account?{' '}
              <Link to="/signup" style={{ color: '#4C5FD5', fontWeight: 600, textDecoration: 'none' }}>
                Create one free
              </Link>
            </p>

            {/* Email */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: 600, color: '#1A1F36', fontSize: '14px', marginBottom: '8px' }}>
                Email address
              </label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#a0aec0', fontSize: '16px' }}>
                  ✉
                </span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={userEmail}
                  onChange={e => setUserEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && processLogin()}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Password */}
            <div style={{ marginBottom: '12px' }}>
              <label style={{ display: 'block', fontWeight: 600, color: '#1A1F36', fontSize: '14px', marginBottom: '8px' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#a0aec0', fontSize: '16px' }}>
                  🔒
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={userPassword}
                  onChange={e => setUserPassword(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && processLogin()}
                  style={inputStyle}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute', right: '14px', top: '50%',
                    transform: 'translateY(-50%)', background: 'none',
                    border: 'none', cursor: 'pointer', color: '#a0aec0', fontSize: '13px',
                  }}>
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Forgot password */}
            <div style={{ textAlign: 'right', marginBottom: '28px' }}>
              <Link to="/forget-password" style={{ color: '#4C5FD5', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              onClick={processLogin}
              disabled={showLoader}
              style={{
                width: '100%', padding: '14px', background: '#4C5FD5',
                color: '#fff', border: 'none', borderRadius: '10px',
                fontWeight: 700, fontSize: '15px', cursor: showLoader ? 'not-allowed' : 'pointer',
                opacity: showLoader ? 0.8 : 1, transition: 'all 0.2s',
                fontFamily: 'inherit',
              }}>
              {showLoader ? 'Signing in...' : 'Sign in'}
            </button>

            {/* Divider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '28px 0' }}>
              <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />
              <span style={{ color: '#a0aec0', fontSize: '13px' }}>or</span>
              <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />
            </div>

            {/* App download hint */}
            <div style={{
              background: '#EEF2FF', borderRadius: '10px', padding: '16px',
              display: 'flex', gap: '12px', alignItems: 'center',
            }}>
              <span style={{ fontSize: '24px' }}>📱</span>
              <div>
                <div style={{ fontWeight: 700, color: '#1A1F36', fontSize: '14px' }}>Use the mobile app</div>
                <div style={{ color: '#718096', fontSize: '13px' }}>Available on Google Play and App Store</div>
              </div>
              <a href="/#" style={{
                marginLeft: 'auto', background: '#4C5FD5', color: '#fff',
                padding: '8px 14px', borderRadius: '8px', fontSize: '12px',
                fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap',
              }}>Download</a>
            </div>
          </div>
        </div>
      </div>

    {/* Success Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header style={{ border: 'none', paddingBottom: 0 }} closeButton>
          <div style={{ flex: 1, textAlign: 'center', paddingTop: '8px', paddingLeft: '24px' }}>
            <h5 style={{ fontWeight: 800, color: '#1A1F36', fontSize: '1.1rem', margin: 0 }}>
              Login Successful ✅
            </h5>
          </div>
        </Modal.Header>
        <Modal.Body style={{ textAlign: 'center', padding: '16px 32px 8px' }}>
          <p style={{ color: '#718096', fontSize: '15px', lineHeight: 1.8, marginBottom: '0' }}>
            You are now signed in. How would you like to continue?
          </p>
        </Modal.Body>
        <Modal.Footer style={{ border: 'none', justifyContent: 'center', paddingBottom: '28px', gap: '12px', flexDirection: 'column', padding: '16px 32px 28px' }}>
          {/* Primary — Web Portal */}
          <a href={`${process.env.REACT_APP_PORTAL_URL || 'http://localhost:3000'}/auth/sign-in?sso=${ssoToken}`}
            style={{
              display: 'block', width: '100%', textAlign: 'center',
              background: '#4C5FD5', color: '#fff', borderRadius: '10px',
              padding: '13px', fontWeight: 700, fontSize: '15px',
              textDecoration: 'none',
            }}> 🌐 Open Web Dashboard
          </a>
          {/* Secondary — App */}
          <a href="/#" style={{
            display: 'block', width: '100%', textAlign: 'center',
            background: '#F8FAFF', color: '#4C5FD5', borderRadius: '10px',
            padding: '13px', fontWeight: 600, fontSize: '15px',
            textDecoration: 'none', border: '1px solid #e2e8f0',
          }}>
            📱 Download Mobile App
          </a>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Login;
