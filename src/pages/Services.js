/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuBar from '../component/Menu';
import FooterNote from '../component/Footer';
import useAppInfo from '../component/useAppInfo';

const Services = () => {
  const { appName } = useAppInfo();

  useEffect(() => {
    document.title = `Services — ${appName}`;
    window.scrollTo(0, 0);
  }, [appName]);

  const services = [
    {
      icon: '📱', title: 'Airtime Top-up', color: '#EEF2FF', accent: '#4C5FD5',
      features: ['MTN, Glo, Airtel and 9mobile', 'Below face value pricing', 'Instant delivery', 'Bulk top-up support'],
      desc: 'Recharge any Nigerian network instantly from your wallet. Get airtime below face value with zero transaction fees.',
    },
    {
      icon: '🌐', title: 'Data Bundles', color: '#DBEAFE', accent: '#3B82F6',
      features: ['SME, gifting and corporate plans', 'Daily, weekly and monthly', 'All four major networks', 'Instant activation'],
      desc: 'Buy data bundles at wholesale rates. SME, gifting and corporate plans for every network — activated the moment you pay.',
    },
    {
      icon: '⚡', title: 'Electricity Bills', color: '#FEF3C7', accent: '#D97706',
      features: ['All Nigerian DisCos supported', 'Prepaid and postpaid', 'Token recovery anytime', 'Instant token delivery'],
      desc: 'Pay prepaid and postpaid electricity bills for every distribution company in Nigeria. Your token is saved permanently.',
    },
    {
      icon: '📺', title: 'Cable TV Subscription', color: '#D1FAE5', accent: '#10B981',
      features: ['DStv, GOtv and Startimes', 'Smartcard name verified', 'All packages available', 'Renewal and upgrade'],
      desc: 'Renew or upgrade your decoder subscription. We verify your smartcard name before you pay so there are no mistakes.',
    },
    {
      icon: '🎓', title: 'Exam Result Pins', color: '#FEE2E2', accent: '#EF4444',
      features: ['WAEC, NECO, NABTEB, JAMB', 'Instant pin delivery', 'Saved to your dashboard', 'Bulk purchase supported'],
      desc: 'Get WAEC, NECO, NABTEB and JAMB result checker pins delivered instantly to your dashboard — ready to print or share.',
    },
    {
      icon: '💵', title: 'Sell PayPal Funds', color: '#EEF2FF', accent: '#4C5FD5',
      features: ['Competitive exchange rates', 'Same-day Naira credit', 'Secure verification', 'All PayPal currencies'],
      desc: 'Exchange your PayPal balance for Naira at the best competitive rates. Submit your proof, admin verifies, wallet credited.',
    },
    {
      icon: '💳', title: 'Sell Payoneer Funds', color: '#EDE9FE', accent: '#7C3AED',
      features: ['Market-based rates', 'Fast processing', 'Secure and verified', 'Direct wallet credit'],
      desc: 'Convert your Payoneer earnings to Naira quickly and securely. Best rates with transparent processing.',
    },
    {
      icon: '₿', title: 'Sell Bitcoin (BTC)', color: '#FEF3C7', accent: '#D97706',
      features: ['Live market rates', 'Secure transaction', 'Fast Naira credit', 'All BTC amounts accepted'],
      desc: 'Exchange your Bitcoin to Naira at transparent, live market-based rates. Quick, secure and fully tracked.',
    },
    {
      icon: '🌍', title: 'Virtual Account Opening', color: '#D1FAE5', accent: '#10B981',
      features: ['PayPal account creation', 'Payoneer account setup', 'Full verification support', 'Business accounts available'],
      desc: 'Get foreign PayPal and Payoneer accounts opened and fully verified for you — individual and business accounts.',
    },
  ];

  return (
    <Fragment>
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
          <div style={{
            display: 'inline-block', background: 'rgba(76,95,213,0.2)', color: '#818cf8',
            fontSize: '12px', fontWeight: 700, padding: '6px 16px',
            borderRadius: '100px', marginBottom: '20px',
          }}>OUR SERVICES</div>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#fff',
            letterSpacing: '-0.02em', marginBottom: '20px',
          }}>
            Everything you need, one wallet
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '560px', margin: '0 auto 36px' }}>
            Direct provider integrations mean every order delivers in seconds — or refunds itself automatically. Nothing hangs.
          </p>
          <Link to="/signup" style={{
            background: '#4C5FD5', color: '#fff', padding: '14px 36px',
            borderRadius: '10px', fontWeight: 700, fontSize: '15px', textDecoration: 'none',
          }}>Get Started Free</Link>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding: '100px 0', background: '#F8FAFF' }}>
        <div className="container">
          <div className="row g-4">
            {services.map((s, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-12">
                <div style={{
                  background: '#fff', borderRadius: '20px', padding: '32px',
                  border: '1px solid #e8edf5', height: '100%', display: 'flex', flexDirection: 'column',
                }}>
                  <div style={{
                    width: '60px', height: '60px', borderRadius: '14px',
                    background: s.color, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '28px', marginBottom: '20px',
                  }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 800, color: '#1A1F36', fontSize: '1.1rem', marginBottom: '12px' }}>{s.title}</h3>
                  <p style={{ color: '#718096', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px', flexGrow: 1 }}>{s.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
                    {s.features.map((f, j) => (
                      <li key={j} style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        padding: '6px 0', borderBottom: j < s.features.length - 1 ? '1px solid #f1f5f9' : 'none',
                        fontSize: '13px', color: '#4A5568',
                      }}>
                        <span style={{ color: s.accent, fontWeight: 700 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/signup" style={{
                    display: 'block', textAlign: 'center', padding: '11px',
                    background: s.color, color: s.accent, borderRadius: '10px',
                    fontWeight: 700, fontSize: '14px', textDecoration: 'none',
                  }}>Get Started →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #0F1629 0%, #1a2547 100%)',
        padding: '80px 0', textAlign: 'center',
      }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontSize: '2rem', fontWeight: 800, marginBottom: '16px' }}>
            One account. Every service.
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem', marginBottom: '36px' }}>
            Create your free account and access all services from a single wallet.
          </p>
          <Link to="/signup" style={{
            background: '#4C5FD5', color: '#fff', padding: '14px 40px',
            borderRadius: '10px', fontWeight: 700, fontSize: '15px', textDecoration: 'none',
          }}>Create Free Account</Link>
        </div>
      </section>

      <FooterNote />
    </Fragment>
  );
};

export default Services;