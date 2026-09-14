/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'react-toastify/dist/ReactToastify.css';
import client from '../component/client';
import IsValidEmail from '../component/EmailValidation';
import useAppInfo from '../component/useAppInfo';
import useAppStatus from '../component/useAppStatus';

const Signup = () => {
  const navigate = useNavigate();
  const { appName, appLogo } = useAppInfo();
  const { platformDown, signupBlocked, message } = useAppStatus();
  const [fullName, setFullName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfirmPassword, setUserConfirmPassword] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState({ name: 'Nigeria' });
  const [step, setStep] = useState(1); // 1 = personal, 2 = security

  const handleOnChange = (value, countryData) => {
    setPhone(value);
    setCountry(countryData);
  };

  const handlePhoneFieldChange = (e) => {
    const value = e.target.value;
    if (value === '' || (/^\d+$/.test(value) && value.length <= 11)) {
      setUserPhone(value);
    }
  };

  const goToStep2 = () => {
    if (!fullName || !userEmail || !phone) {
      toast.error('Please fill all required fields');
      return;
    }
    if (!IsValidEmail(userEmail)) {
      toast.error('Please enter a valid email address');
      return;
    }
    setStep(2);
  };

  const submitRegForm = () => {
    if (!phone || !userPassword || !userConfirmPassword) {
      toast.error('All fields are required');
      return;
    }
    if (userPassword !== userConfirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    if (userPassword.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }
    setShowModal(true);
  };

  const processRegistration = async () => {
    setShowLoader(true);
    try {
      const sendData = {
        display_name: fullName,
        email: userEmail,
        phone: '+' + phone,
        password: userPassword,
        share_code: referralCode,
        confirm_password: userConfirmPassword,
        user_country: country.name,
      };
      const res = await client.post('/api/register', sendData);
      if (res.data.msg === '201') {
        toast.success('Account created successfully!');
        setShowModal(false);
        navigate('/verify-account', { state: { userEmailId: userEmail } });
      } else {
        toast.error(res.data.message || 'Registration failed. Please try again.');
        setShowModal(false);
      }
    } catch (error) {
      toast.error('Connection error. Please try again.');
      setShowModal(false);
    } finally {
      setShowLoader(false);
    }
  };

  useEffect(() => {
    document.title = `Create Account — ${appName}`;
  }, [appName]);

  const inputStyle = {
    width: '100%', padding: '13px 16px 13px 44px',
    border: '1.5px solid #e2e8f0', borderRadius: '10px',
    fontSize: '15px', outline: 'none', color: '#1A1F36',
    background: '#fff', fontFamily: 'inherit',
  };

  const labelStyle = {
    display: 'block', fontWeight: 600, color: '#1A1F36',
    fontSize: '14px', marginBottom: '8px',
  };


  return (
    <Fragment>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

      <div style={{ display: 'flex', minHeight: '100vh' }}>

        {/* ── Left Panel ── */}
        <div style={{
          width: '45%',
          background: 'linear-gradient(135deg, #0F1629 0%, #1a2547 60%, #4C5FD5 100%)',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          padding: '48px 56px', position: 'relative', overflow: 'hidden',
        }} className="d-none d-lg-flex">
          <div style={{
            position: 'absolute', top: '-100px', right: '-100px',
            width: '350px', height: '350px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(76,95,213,0.3) 0%, transparent 70%)',
          }} />
          <div style={{
            position: 'absolute', bottom: '-80px', left: '-80px',
            width: '300px', height: '300px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(108,99,255,0.2) 0%, transparent 70%)',
          }} />

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

          <div style={{ zIndex: 2 }}>
            <h2 style={{
              color: '#fff', fontSize: '2rem', fontWeight: 800,
              lineHeight: 1.3, marginBottom: '20px', letterSpacing: '-0.02em',
            }}>
              Join thousands of<br />Nigerians already<br />
              <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 400, fontSize: '1.3rem' }}>
                transacting smarter every day.
              </span>
            </h2>

            {/* Benefits */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
              {[
                { icon: '🎁', title: 'Signup bonus', desc: 'Get a bonus credited on your first qualifying transaction' },
                { icon: '👥', title: 'Refer & earn', desc: 'Earn every time someone you refer makes a transaction' },
                { icon: '🪙', title: 'Earn coins', desc: 'Get reward coins on every purchase — redeem for cash' },
                { icon: '🆓', title: 'Always free', desc: 'No setup fee, no monthly charge, ever' },
              ].map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    background: 'rgba(255,255,255,0.1)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0,
                  }}>{b.icon}</div>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '14px' }}>{b.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px' }}>{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', zIndex: 2 }}>
            © {new Date().getFullYear()} {appName}. All rights reserved.
          </div>
        </div>

        {/* ── Right Panel — Form ── */}
        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',
          padding: '48px 24px', background: '#F8FAFF', overflowY: 'auto',
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

          {platformDown || signupBlocked ? (
          <div style={{
            textAlign: 'center',
            padding: '40px 24px',
            background: platformDown ? '#FFF7ED' : '#FFF5F5',
            borderRadius: '16px',
            border: `1px solid ${platformDown ? '#FED7AA' : '#FED7D7'}`,
          }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>
              {platformDown ? '🔧' : '🚫'}
            </div>
            <h3 style={{
              fontWeight: 800, fontSize: '18px', marginBottom: '8px',
              color: platformDown ? '#9A3412' : '#C53030',
            }}>
              {platformDown ? "We'll be right back" : 'Signup Temporarily Unavailable'}
            </h3>
            <p style={{ color:'#718096', maxWidth:'380px' }}>
            {message || (platformDown
              ? 'The platform is under maintenance. Please check back shortly.'
              : 'New registrations are temporarily paused. Please check back soon.')}
          </p>
          </div>
        ) : (
          <>
          <div style={{ width: '100%', maxWidth: '440px' }}>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1A1F36', marginBottom: '6px', letterSpacing: '-0.02em' }}>
              Create your free account
            </h1>
            <p style={{ color: '#718096', fontSize: '15px', marginBottom: '28px' }}>
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#4C5FD5', fontWeight: 600, textDecoration: 'none' }}>Sign in</Link>
            </p>

            {/* Step indicator */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
              {[1, 2].map(s => (
                <div key={s} style={{
                  flex: 1, height: '4px', borderRadius: '100px',
                  background: s <= step ? '#4C5FD5' : '#e2e8f0',
                  transition: 'background 0.3s',
                }} />
              ))}
            </div>
            <p style={{ color: '#a0aec0', fontSize: '12px', marginBottom: '24px', fontWeight: 600 }}>
              STEP {step} OF 2 — {step === 1 ? 'PERSONAL INFORMATION' : 'ACCOUNT SECURITY'}
            </p>

            {/* ── STEP 1 ── */}
            {step === 1 && (
              <>
                {/* Full name */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={labelStyle}>Full name</label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#a0aec0' }}>👤</span>
                    <input type="text" placeholder="Your full name"
                      value={fullName} onChange={e => setFullName(e.target.value)}
                      style={inputStyle} />
                  </div>
                </div>

                {/* Email */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={labelStyle}>Email address</label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#a0aec0' }}>✉</span>
                    <input type="email" placeholder="you@example.com"
                      value={userEmail} onChange={e => setUserEmail(e.target.value)}
                      style={inputStyle} />
                  </div>
                </div>

                {/* Country + phone */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={labelStyle}>Country & phone number</label>
                  <PhoneInput
                    country={'ng'}
                    value={phone}
                    onChange={(value, countryData) => {
                      setPhone(value);
                      setCountry(countryData);
                    }}
                    inputStyle={{
                      width: '100%',
                      padding: '13px 16px 13px 48px',
                      border: '1.5px solid #e2e8f0',
                      borderRadius: '10px',
                      fontSize: '15px',
                      color: '#1A1F36',
                      background: '#fff',
                      fontFamily: 'inherit',
                      height: 'auto',
                    }}
                    buttonStyle={{
                      border: '1.5px solid #e2e8f0',
                      borderRight: 'none',
                      borderRadius: '10px 0 0 10px',
                      background: '#fff',
                      padding: '0 8px',
                    }}
                    containerStyle={{ width: '100%' }}
                    dropdownStyle={{ borderRadius: '10px', fontSize: '14px' }}
                    placeholder="Phone number"
                    enableSearch
                    searchPlaceholder="Search country..."
                  />
                </div>

                {/* Referral */}
                <div style={{ marginBottom: '28px' }}>
                  <label style={labelStyle}>Referral code <span style={{ color: '#a0aec0', fontWeight: 400 }}>(optional)</span></label>
                  <input type="text" placeholder="Enter referral code if you have one"
                    value={referralCode} onChange={e => setReferralCode(e.target.value)}
                    style={{ ...inputStyle, paddingLeft: '16px' }} />
                </div>

                <button onClick={goToStep2} style={{
                  width: '100%', padding: '14px', background: '#4C5FD5',
                  color: '#fff', border: 'none', borderRadius: '10px',
                  fontWeight: 700, fontSize: '15px', cursor: 'pointer',
                  fontFamily: 'inherit',
                }}>
                  Continue →
                </button>
              </>
            )}

            {/* ── STEP 2 ── */}
            {step === 2 && (
              <>
                {/* Password */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={labelStyle}>Password</label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#a0aec0' }}>🔒</span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Min. 6 characters"
                      value={userPassword} onChange={e => setUserPassword(e.target.value)}
                      style={inputStyle} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} style={{
                      position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)',
                      background: 'none', border: 'none', cursor: 'pointer', color: '#a0aec0', fontSize: '13px',
                    }}>{showPassword ? 'Hide' : 'Show'}</button>
                  </div>
                </div>

                {/* Confirm password */}
                <div style={{ marginBottom: '28px' }}>
                  <label style={labelStyle}>Confirm password</label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#a0aec0' }}>🔒</span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Re-enter your password"
                      value={userConfirmPassword} onChange={e => setUserConfirmPassword(e.target.value)}
                      style={inputStyle} />
                  </div>
                </div>

                {/* Terms */}
                <p style={{ color: '#a0aec0', fontSize: '13px', marginBottom: '20px', lineHeight: 1.6 }}>
                  By creating an account you agree to our{' '}
                  <Link to="/terms-and-conditions" style={{ color: '#4C5FD5' }}>Terms of Service</Link> and{' '}
                  <Link to="/privacy-policy" style={{ color: '#4C5FD5' }}>Privacy Policy</Link>.
                </p>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button onClick={() => setStep(1)} style={{
                    padding: '14px 20px', background: '#f1f5f9', border: 'none',
                    borderRadius: '10px', fontWeight: 600, fontSize: '15px',
                    cursor: 'pointer', color: '#718096', fontFamily: 'inherit',
                  }}>← Back</button>
                  <button onClick={submitRegForm} style={{
                    flex: 1, padding: '14px', background: '#4C5FD5', color: '#fff',
                    border: 'none', borderRadius: '10px', fontWeight: 700,
                    fontSize: '15px', cursor: 'pointer', fontFamily: 'inherit',
                  }}>
                    Create Account
                  </button>
                </div>
              </>
            )}
          </div>
          </>
        )}
        {signupBlocked &&
        <p style={{ color: '#718096', fontSize: '15px', marginBottom: '28px', marginTop: '15px' }}>
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#4C5FD5', fontWeight: 600, textDecoration: 'none' }}>Sign in</Link>
        </p>
        }

        </div>
      </div>

      {/* Confirm Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered backdrop="static" keyboard={false}>
        <Modal.Header style={{ border: 'none', paddingBottom: 0 }}>
          <div style={{ width: '100%', textAlign: 'center', paddingTop: '8px' }}>
            <div style={{ fontSize: '48px', marginBottom: '8px' }}>👋</div>
            <h5 style={{ fontWeight: 800, color: '#1A1F36', fontSize: '1.2rem' }}>Confirm Your Details</h5>
          </div>
        </Modal.Header>
        <Modal.Body style={{ padding: '8px 32px 8px' }}>
          {[
            { label: 'Full Name', value: fullName },
            { label: 'Email', value: userEmail },
            { label: 'Phone', value: phone ? `+${phone}` : '—' },
            { label: 'Country', value: country?.name || country?.countryName || '—' },
              referralCode ? { label: 'Referral Code', value: referralCode } : null,
            ].filter(Boolean).map((d, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '10px 0', borderBottom: '1px solid #f1f5f9',
            }}>
              <span style={{ color: '#718096', fontSize: '14px' }}>{d.label}</span>
              <span style={{ fontWeight: 700, color: '#1A1F36', fontSize: '14px' }}>{d.value}</span>
            </div>
          ))}
          <p style={{ color: '#a0aec0', fontSize: '13px', marginTop: '16px', textAlign: 'center' }}>
            Please confirm these details are correct before proceeding.
          </p>
        </Modal.Body>
        <Modal.Footer style={{ border: 'none', justifyContent: 'center', paddingBottom: '24px', gap: '12px' }}>
          <button onClick={() => setShowModal(false)} style={{
            background: '#f1f5f9', border: 'none', borderRadius: '8px',
            padding: '10px 24px', fontWeight: 600, cursor: 'pointer', color: '#718096',
          }}>Edit</button>
          <button onClick={processRegistration} disabled={showLoader} style={{
            background: '#4C5FD5', color: '#fff', border: 'none',
            borderRadius: '8px', padding: '10px 28px', fontWeight: 700,
            cursor: showLoader ? 'not-allowed' : 'pointer', opacity: showLoader ? 0.8 : 1,
          }}>
            {showLoader ? 'Creating account...' : 'Yes, Create Account'}
          </button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Signup;
