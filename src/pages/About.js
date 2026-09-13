/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuBar from '../component/Menu';
import FooterNote from '../component/Footer';
import useAppInfo from '../component/useAppInfo';

const About = () => {
  const { appName } = useAppInfo();

  useEffect(() => {
    document.title = `About Us — ${appName}`;
    window.scrollTo(0, 0);
  }, [appName]);

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
          }}>ABOUT US</div>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#fff',
            letterSpacing: '-0.02em', marginBottom: '20px', maxWidth: '600px', margin: '0 auto 20px',
          }}>
            We are building Nigeria's most trusted virtual funds platform
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '540px', margin: '0 auto' }}>
            {appName} was built to solve a real problem — exchanging virtual funds safely,
            quickly, and at the best possible rate.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 col-12">
              <div style={{
                display: 'inline-block', background: '#EEF2FF', color: '#4C5FD5',
                fontSize: '12px', fontWeight: 700, padding: '6px 16px',
                borderRadius: '100px', marginBottom: '16px',
              }}>OUR MISSION</div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1A1F36', letterSpacing: '-0.02em', marginBottom: '20px' }}>
                Making virtual funds accessible and profitable for every Nigerian
              </h2>
              <p style={{ color: '#718096', fontSize: '1rem', lineHeight: 1.9, marginBottom: '20px' }}>
                We started {appName} because we understood the frustration — finding a reliable
                platform to sell PayPal, Payoneer or Bitcoin was risky, slow, and often unprofitable.
                Rates were hidden, delays were common, and trust was hard to find.
              </p>
              <p style={{ color: '#718096', fontSize: '1rem', lineHeight: 1.9, marginBottom: '32px' }}>
                We built a platform that is transparent, fast, and fair. One wallet for
                everything — buy airtime, pay bills, sell virtual funds, and earn rewards
                on every transaction. No surprises, no delays.
              </p>
              <Link to="/signup" style={{
                background: '#4C5FD5', color: '#fff', padding: '13px 32px',
                borderRadius: '10px', fontWeight: 700, fontSize: '15px',
                textDecoration: 'none', display: 'inline-block',
              }}>Join {appName} today →</Link>
            </div>
            <div className="col-lg-6 col-12">
              {/* Stats grid */}
              <div className="row g-3">
                {[
                  { value: '15,000+', label: 'Registered users', icon: '👥', color: '#EEF2FF', accent: '#4C5FD5' },
                  { value: '98,000+', label: 'Orders delivered', icon: '⚡', color: '#D1FAE5', accent: '#10B981' },
                  { value: '99%', label: 'Delivery success rate', icon: '✅', color: '#FEF3C7', accent: '#D97706' },
                  { value: '<10s', label: 'Average delivery time', icon: '🚀', color: '#EDE9FE', accent: '#7C3AED' },
                ].map((s, i) => (
                  <div key={i} className="col-6">
                    <div style={{
                      background: s.color, borderRadius: '16px', padding: '24px',
                      textAlign: 'center',
                    }}>
                      <div style={{ fontSize: '28px', marginBottom: '8px' }}>{s.icon}</div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 800, color: s.accent, marginBottom: '4px' }}>{s.value}</div>
                      <div style={{ fontSize: '13px', color: '#718096' }}>{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '100px 0', background: '#F8FAFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto 60px' }}>
            <div style={{
              display: 'inline-block', background: '#EEF2FF', color: '#4C5FD5',
              fontSize: '12px', fontWeight: 700, padding: '6px 16px',
              borderRadius: '100px', marginBottom: '16px',
            }}>OUR VALUES</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1A1F36', letterSpacing: '-0.02em' }}>
              What drives everything we build
            </h2>
          </div>
          <div className="row g-4">
            {[
              { icon: '🔒', title: 'Trust first', desc: 'Every decision we make starts with trust — yours. Your money is encrypted, your transactions are protected, and your data is never sold.' },
              { icon: '⚡', title: 'Speed matters', desc: 'We know waiting is frustrating. We build direct connections to every provider so your order settles in seconds, not minutes.' },
              { icon: '💎', title: 'Fair rates always', desc: 'We publish our rates openly and never add hidden charges. What you see is what your wallet is charged — every single time.' },
              { icon: '🤝', title: 'Built for Nigeria', desc: 'Every feature we build is designed for Nigerian users, on Nigerian networks, using Nigerian banks. This platform is for you.' },
              { icon: '🌱', title: 'Always improving', desc: 'We listen to feedback and ship improvements regularly. Every complaint is an opportunity to make {appName} better.' },
              { icon: '💬', title: 'Real support', desc: 'We actually answer. Reach us on WhatsApp or live chat and a real person responds — with your full order history already in front of them.' },
            ].map((v, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-12">
                <div style={{
                  background: '#fff', borderRadius: '16px', padding: '28px',
                  border: '1px solid #e8edf5', height: '100%',
                }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '12px',
                    background: '#EEF2FF', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '24px', marginBottom: '16px',
                  }}>{v.icon}</div>
                  <h4 style={{ fontWeight: 700, color: '#1A1F36', fontSize: '1rem', marginBottom: '10px' }}>{v.title}</h4>
                  <p style={{ color: '#718096', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>{v.desc.replace('{appName}', appName)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #4C5FD5 0%, #6C63FF 100%)',
        padding: '80px 0', textAlign: 'center',
      }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontSize: '2rem', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Ready to experience the difference?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', marginBottom: '36px' }}>
            Join thousands of Nigerians already using {appName} to manage their virtual funds.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/signup" style={{
              background: '#fff', color: '#4C5FD5', padding: '14px 36px',
              borderRadius: '10px', fontWeight: 700, fontSize: '15px', textDecoration: 'none',
            }}>Create Free Account</Link>
            <Link to="/contact-us" style={{
              background: 'rgba(255,255,255,0.15)', color: '#fff',
              border: '1px solid rgba(255,255,255,0.3)',
              padding: '14px 36px', borderRadius: '10px', fontWeight: 600,
              fontSize: '15px', textDecoration: 'none',
            }}>Contact Us</Link>
          </div>
        </div>
      </section>

      <FooterNote />
    </Fragment>
  );
};

export default About;