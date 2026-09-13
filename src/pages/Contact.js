/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MenuBar from '../component/Menu';
import FooterNote from '../component/Footer';
import client from '../component/client';
import IsValidEmail from '../component/EmailValidation';
import useAppInfo from '../component/useAppInfo';

const Contact = () => {
  const { appName } = useAppInfo();

  const [fullName, setFullName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = `Contact Us — ${appName}`;
    window.scrollTo(0, 0);
  }, [appName]);

  const processContact = async () => {
    if (!fullName || !contactEmail || !contactMessage) {
      toast.error('Please fill all required fields');
      return;
    }
    if (!IsValidEmail(contactEmail)) {
      toast.error('Please enter a valid email address');
      return;
    }
    setShowLoader(true);
    try {
      const res = await client.post('/api/submit_ticketWebsite', {
        customer_name: fullName,
        customer_phone: contactPhone,
        customer_email: contactEmail,
        customer_message: contactMessage,
      });
      if (res.data.msg === '200') {
        setSubmitted(true);
        setFullName(''); setContactPhone(''); setContactEmail(''); setContactMessage('');
      } else {
        toast.error(res.data.message || 'Failed to send message. Please try again.');
      }
    } catch {
      toast.error('Connection error. Please try again later.');
    } finally {
      setShowLoader(false);
    }
  };

  const inputStyle = {
    width: '100%', padding: '13px 16px', border: '1.5px solid #e2e8f0',
    borderRadius: '10px', fontSize: '15px', outline: 'none',
    color: '#1A1F36', background: '#fff', fontFamily: 'inherit',
    transition: 'border-color 0.2s',
  };

  return (
    <Fragment>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <MenuBar />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0F1629 0%, #1a2547 100%)',
        padding: '160px 0 80px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px',
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(76,95,213,0.15) 0%, transparent 70%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#fff',
            letterSpacing: '-0.02em', marginBottom: '20px',
          }}>We are here to help</h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '480px', margin: '0 auto' }}>
            Have a question, issue or suggestion? Send us a message and we will respond as quickly as possible.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section style={{ padding: '100px 0', background: '#F8FAFF' }}>
        <div className="container">
          <div className="row g-5">

            {/* Info */}
            <div className="col-lg-5 col-12">
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1A1F36', marginBottom: '16px', letterSpacing: '-0.02em' }}>
                Get in touch
              </h2>
              <p style={{ color: '#718096', fontSize: '15px', lineHeight: 1.8, marginBottom: '40px' }}>
                Our support team is available all week. We typically respond within a few hours.
                For urgent issues, reach us on WhatsApp directly.
              </p>

              {[
                {
                  icon: '💬', title: 'WhatsApp Support',
                  detail: 'Chat with us directly for the fastest response',
                  action: 'Start chat →', href: '#',
                },
                {
                  icon: '✉️', title: 'Email Support',
                  detail: 'Send a detailed message and we will reply within 24 hours',
                  action: 'support@otamobile.com', href: 'mailto:support@otamobile.com',
                },
                {
                  icon: '📱', title: 'Mobile App',
                  detail: 'Access in-app support from your dashboard anytime',
                  action: 'Download app →', href: '#',
                },
              ].map((c, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '16px', marginBottom: '28px',
                  padding: '20px', background: '#fff', borderRadius: '14px',
                  border: '1px solid #e8edf5',
                }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: '#EEF2FF', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '22px', flexShrink: 0,
                  }}>{c.icon}</div>
                  <div>
                    <h5 style={{ fontWeight: 700, color: '#1A1F36', fontSize: '15px', marginBottom: '4px' }}>{c.title}</h5>
                    <p style={{ color: '#718096', fontSize: '14px', marginBottom: '8px' }}>{c.detail}</p>
                    <a href={c.href} style={{ color: '#4C5FD5', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
                      {c.action}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="col-lg-7 col-12">
              <div style={{
                background: '#fff', borderRadius: '20px', padding: '40px',
                border: '1px solid #e8edf5', boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
              }}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                    <div style={{ fontSize: '56px', marginBottom: '16px' }}>✅</div>
                    <h3 style={{ fontWeight: 800, color: '#1A1F36', marginBottom: '12px' }}>Message Sent!</h3>
                    <p style={{ color: '#718096', fontSize: '15px', lineHeight: 1.8, marginBottom: '28px' }}>
                      Thank you for reaching out. We have received your message
                      and will respond as soon as possible.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      style={{
                        background: '#4C5FD5', color: '#fff', border: 'none',
                        borderRadius: '10px', padding: '12px 28px', fontWeight: 700,
                        cursor: 'pointer', fontSize: '15px', fontFamily: 'inherit',
                      }}>Send Another Message</button>
                  </div>
                ) : (
                  <>
                    <h3 style={{ fontWeight: 800, color: '#1A1F36', fontSize: '1.3rem', marginBottom: '8px' }}>
                      Send us a message
                    </h3>
                    <p style={{ color: '#718096', fontSize: '14px', marginBottom: '28px' }}>
                      Fill in the form below and we will get back to you shortly.
                    </p>

                    <div className="row g-3">
                      <div className="col-md-6 col-12">
                        <label style={{ display: 'block', fontWeight: 600, color: '#1A1F36', fontSize: '14px', marginBottom: '8px' }}>
                          Full name *
                        </label>
                        <input type="text" placeholder="Your full name"
                          value={fullName} onChange={e => setFullName(e.target.value)}
                          style={inputStyle} />
                      </div>
                      <div className="col-md-6 col-12">
                        <label style={{ display: 'block', fontWeight: 600, color: '#1A1F36', fontSize: '14px', marginBottom: '8px' }}>
                          Phone number
                        </label>
                        <input type="tel" placeholder="e.g. 08012345678"
                          value={contactPhone} onChange={e => setContactPhone(e.target.value)}
                          style={inputStyle} />
                      </div>
                      <div className="col-12">
                        <label style={{ display: 'block', fontWeight: 600, color: '#1A1F36', fontSize: '14px', marginBottom: '8px' }}>
                          Email address *
                        </label>
                        <input type="email" placeholder="you@example.com"
                          value={contactEmail} onChange={e => setContactEmail(e.target.value)}
                          style={inputStyle} />
                      </div>
                      <div className="col-12">
                        <label style={{ display: 'block', fontWeight: 600, color: '#1A1F36', fontSize: '14px', marginBottom: '8px' }}>
                          Message *
                        </label>
                        <textarea
                          placeholder="Describe your issue or question in detail..."
                          value={contactMessage}
                          onChange={e => setContactMessage(e.target.value)}
                          rows={5}
                          style={{ ...inputStyle, resize: 'vertical' }}
                        />
                      </div>
                      <div className="col-12">
                        <button
                          onClick={processContact}
                          disabled={showLoader}
                          style={{
                            width: '100%', padding: '14px', background: '#4C5FD5',
                            color: '#fff', border: 'none', borderRadius: '10px',
                            fontWeight: 700, fontSize: '15px',
                            cursor: showLoader ? 'not-allowed' : 'pointer',
                            opacity: showLoader ? 0.8 : 1, fontFamily: 'inherit',
                          }}>
                          {showLoader ? 'Sending...' : 'Send Message'}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterNote />
    </Fragment>
  );
};

export default Contact;
