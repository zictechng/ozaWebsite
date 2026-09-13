/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import client from './client';
import useAppInfo from './useAppInfo';

const FooterNote = () => {
  const { appName, appLogo } = useAppInfo();
  const [newsletter, setNewsletter] = useState('');
  const [newsletterMsg, setNewsletterMsg] = useState('');
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const year = new Date().getFullYear();

  const subscribeNewsletter = async () => {
    if (!newsletter || !newsletter.includes('@')) {
      setNewsletterMsg('Please enter a valid email address.');
      return;
    }
    setNewsletterLoading(true);
    try {
      const res = await client.post('/api/newsletter_subscriptions', { email: newsletter });
      if (res.data.msg === '200') {
        setNewsletterMsg('Thank you for subscribing! You will receive updates from us.');
        setNewsletter('');
      } else {
        setNewsletterMsg(res.data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setNewsletterMsg('Connection error. Please try again later.');
    } finally {
      setNewsletterLoading(false);
    }
  };

  return (
    <Fragment>
      <footer style={{ background: '#0a0f1e', color: '#94a3b8' }}>

        {/* Newsletter strip */}
        <div style={{
          background: 'linear-gradient(135deg, #4C5FD5 0%, #6C63FF 100%)',
          padding: '48px 0',
        }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12" style={{ marginBottom: '24px' }}>
                <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '1.5rem', marginBottom: '8px' }}>
                  Stay in the loop
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px', margin: 0 }}>
                  Get updates on new services, rate changes and platform news.
                </p>
              </div>
              <div className="col-lg-6 col-12">
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={newsletter}
                    onChange={e => setNewsletter(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && subscribeNewsletter()}
                    className="newsletter-input"
                    style={{
                      flex: 1, padding: '13px 16px', borderRadius: '10px',
                      border: '1.5px solid rgba(255,255,255,0.3)',
                      background: 'rgba(255,255,255,0.15)', color: '#fff',
                      fontSize: '15px', outline: 'none', fontFamily: 'inherit',
                    }}
                  />
                  <button
                    onClick={subscribeNewsletter}
                    disabled={newsletterLoading}
                    style={{
                      background: '#fff', color: '#4C5FD5', border: 'none',
                      borderRadius: '10px', padding: '13px 24px', fontWeight: 700,
                      fontSize: '14px', cursor: 'pointer', whiteSpace: 'nowrap',
                      fontFamily: 'inherit',
                    }}>
                    {newsletterLoading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                {newsletterMsg && (
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', marginTop: '8px' }}>
                    {newsletterMsg}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div style={{ padding: '80px 0 40px' }}>
          <div className="container">
            <div className="row">

              {/* Brand col */}
              <div className="col-lg-4 col-md-6 col-12" style={{ marginBottom: '40px' }}>
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  {appLogo ? (
                    <img src={appLogo} alt={appName} style={{ height: '36px', width: 'auto' }} />
                  ) : (
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '8px',
                      background: 'linear-gradient(135deg, #4C5FD5, #6C63FF)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontWeight: 800, fontSize: '16px',
                    }}>{appName?.charAt(0) || 'O'}</div>
                  )}
                  <span style={{ color: '#fff', fontWeight: 800, fontSize: '18px' }}>{appName}</span>
                </Link>
                <p style={{ fontSize: '14px', lineHeight: 1.8, maxWidth: '280px', marginBottom: '24px' }}>
                  The most reliable and profitable way to sell virtual funds,
                  pay bills and manage your money — all from one wallet.
                </p>

                {/* Social */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  {[
                    { icon: 'f', href: '#' },
                    { icon: '𝕏', href: '#' },
                    { icon: 'in', href: '#' },
                    { icon: '📸', href: '#' },
                  ].map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{
                      width: '36px', height: '36px', borderRadius: '8px',
                      background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#94a3b8', textDecoration: 'none', fontSize: '14px', fontWeight: 700,
                    }}>{s.icon}</a>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="col-lg-2 col-md-6 col-6" style={{ marginBottom: '40px' }}>
                <h5 style={{ color: '#fff', fontWeight: 700, fontSize: '14px', marginBottom: '20px', letterSpacing: '0.5px' }}>
                  SERVICES
                </h5>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    { label: 'Buy Airtime', path: '/services' },
                    { label: 'Buy Data', path: '/services' },
                    { label: 'Electricity Bills', path: '/services' },
                    { label: 'Cable TV', path: '/services' },
                    { label: 'Sell PayPal', path: '/services' },
                    { label: 'Sell Payoneer', path: '/services' },
                    { label: 'Sell Bitcoin', path: '/services' },
                  ].map((link, i) => (
                    <li key={i} style={{ marginBottom: '10px' }}>
                      <Link to={link.path} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', lineHeight: 1.6 }}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="col-lg-2 col-md-6 col-6" style={{ marginBottom: '40px' }}>
                <h5 style={{ color: '#fff', fontWeight: 700, fontSize: '14px', marginBottom: '20px', letterSpacing: '0.5px' }}>
                  COMPANY
                </h5>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    { label: 'About Us', path: '/about-us' },
                    { label: 'Contact Us', path: '/contact-us' },
                    { label: 'Blog', path: '#' },
                    { label: 'Careers', path: '#' },
                  ].map((link, i) => (
                    <li key={i} style={{ marginBottom: '10px' }}>
                      <Link to={link.path} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', lineHeight: 1.6 }}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal & Account */}
              <div className="col-lg-2 col-md-6 col-6" style={{ marginBottom: '40px' }}>
                <h5 style={{ color: '#fff', fontWeight: 700, fontSize: '14px', marginBottom: '20px', letterSpacing: '0.5px' }}>
                  ACCOUNT
                </h5>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    { label: 'Sign In', path: '/login' },
                    { label: 'Create Account', path: '/signup' },
                    { label: 'Forgot Password', path: '/forget-password' },
                    { label: 'Verify Account', path: '/verify-account' },
                  ].map((link, i) => (
                    <li key={i} style={{ marginBottom: '10px' }}>
                      <Link to={link.path} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', lineHeight: 1.6 }}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div className="col-lg-2 col-md-6 col-6" style={{ marginBottom: '40px' }}>
                <h5 style={{ color: '#fff', fontWeight: 700, fontSize: '14px', marginBottom: '20px', letterSpacing: '0.5px' }}>
                  LEGAL
                </h5>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    { label: 'Privacy Policy', path: '/privacy-policy' },
                    { label: 'Terms of Service', path: '/terms-and-conditions' },
                    { label: 'Cookie Policy', path: '/privacy-policy' },
                  ].map((link, i) => (
                    <li key={i} style={{ marginBottom: '10px' }}>
                      <Link to={link.path} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', lineHeight: 1.6 }}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* App badges */}
                <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { icon: '▶', label: 'Google Play' },
                    { icon: '🍎', label: 'App Store' },
                  ].map((s, i) => (
                    <a key={i} href="/#" style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px', padding: '8px 12px', textDecoration: 'none', color: '#94a3b8',
                    }}>
                      <span style={{ fontSize: '14px' }}>{s.icon}</span>
                      <span style={{ fontSize: '12px', fontWeight: 600 }}>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: '32px', marginTop: '20px',
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', flexWrap: 'wrap', gap: '16px',
            }}>
              <p style={{ fontSize: '14px', margin: 0 }}>
                © {year} {appName}. All rights reserved. Powered by{' '}
                <a href="https://zictech-ng.com/" target="_blank" rel="noreferrer"
                  style={{ color: '#4C5FD5', textDecoration: 'none', fontWeight: 600 }}>
                  Zictech Technologies
                </a>
              </p>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: '#10B981', display: 'inline-block',
                }} />
                <span style={{ fontSize: '13px', color: '#10B981', fontWeight: 600 }}>
                  All systems operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default FooterNote;