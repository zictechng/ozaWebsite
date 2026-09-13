/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import MenuBar from '../component/Menu';
import FooterNote from '../component/Footer';
import useAppInfo from '../component/useAppInfo';

const useCounter = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  const ref = useRef(false);
  useEffect(() => {
    if (!start || ref.current) return;
    ref.current = true;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, start]);
  return count;
};

// ── Phone Mockup Component
const PhoneMockup = () => (
  <div style={{
    width: '220px', height: '420px', borderRadius: '32px',
    background: '#0F1629', border: '3px solid rgba(76,95,213,0.4)',
    boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
    overflow: 'hidden', position: 'relative', flexShrink: 0,
  }}>
    {/* Status bar */}
    <div style={{
      background: '#0F1629', padding: '10px 16px 6px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <span style={{ color: '#fff', fontSize: '10px', fontWeight: 700 }}>9:41</span>
      <div style={{
        width: '60px', height: '14px', background: '#1a2547',
        borderRadius: '100px', margin: '0 auto',
      }} />
      <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
        <div style={{ width: '12px', height: '8px', border: '1.5px solid #fff', borderRadius: '2px', position: 'relative' }}>
          <div style={{ width: '60%', height: '100%', background: '#10B981', borderRadius: '1px' }} />
        </div>
      </div>
    </div>

    {/* App header */}
    <div style={{
      background: 'linear-gradient(135deg, #4C5FD5 0%, #6C63FF 100%)',
      padding: '12px 14px 20px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <div>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '9px' }}>Good morning 👋</div>
          <div style={{ color: '#fff', fontSize: '12px', fontWeight: 700 }}>Benny Holland</div>
        </div>
        <div style={{
          width: '28px', height: '28px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.2)', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: '12px', fontWeight: 700,
        }}>B</div>
      </div>
      {/* Balance card */}
      <div style={{
        background: 'rgba(255,255,255,0.12)', borderRadius: '12px',
        padding: '10px 12px', backdropFilter: 'blur(10px)',
      }}>
        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '8px', marginBottom: '2px' }}>Main Wallet</div>
        <div style={{ color: '#fff', fontSize: '16px', fontWeight: 800, marginBottom: '8px' }}>₦1,250,000</div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {[
            { label: 'USD', value: '$842' },
            { label: 'Bonus', value: '₦12,500' },
          ].map((w, i) => (
            <div key={i} style={{
              flex: 1, background: 'rgba(255,255,255,0.1)',
              borderRadius: '6px', padding: '4px 6px',
            }}>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '7px' }}>{w.label}</div>
              <div style={{ color: '#fff', fontSize: '9px', fontWeight: 700 }}>{w.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Quick actions */}
    <div style={{
      background: '#131b35', padding: '10px 10px 6px',
      display: 'flex', justifyContent: 'space-around',
    }}>
      {[
        { icon: '📱', label: 'Airtime' },
        { icon: '🌐', label: 'Data' },
        { icon: '⚡', label: 'Bills' },
        { icon: '💵', label: 'Sell' },
      ].map((a, i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '10px',
            background: 'rgba(76,95,213,0.2)', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            fontSize: '14px', margin: '0 auto 3px',
          }}>{a.icon}</div>
          <div style={{ color: '#718096', fontSize: '7px' }}>{a.label}</div>
        </div>
      ))}
    </div>

    {/* Transactions */}
    <div style={{ background: '#131b35', padding: '6px 10px', flex: 1 }}>
      <div style={{ color: '#718096', fontSize: '8px', marginBottom: '6px', fontWeight: 600 }}>RECENT</div>
      {[
        { icon: '📱', label: 'MTN 10GB', amt: '-₦3,400', color: '#EF4444', time: 'Just now' },
        { icon: '💰', label: 'PayPal Sale', amt: '+₦285k', color: '#10B981', time: '2m ago' },
        { icon: '⚡', label: 'Electricity', amt: '-₦5,000', color: '#EF4444', time: '1hr ago' },
        { icon: '🎁', label: 'Bonus Credit', amt: '+₦2,500', color: '#10B981', time: 'Today' },
      ].map((tx, i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', padding: '5px 6px', marginBottom: '3px',
          background: 'rgba(255,255,255,0.03)', borderRadius: '6px',
        }}>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <span style={{ fontSize: '10px' }}>{tx.icon}</span>
            <div>
              <div style={{ color: '#e2e8f0', fontSize: '8px', fontWeight: 600 }}>{tx.label}</div>
              <div style={{ color: '#718096', fontSize: '7px' }}>{tx.time}</div>
            </div>
          </div>
          <div style={{ color: tx.color, fontSize: '8px', fontWeight: 700 }}>{tx.amt}</div>
        </div>
      ))}
    </div>

    {/* Nav bar */}
    <div style={{
      background: '#0F1629', padding: '6px 10px',
      display: 'flex', justifyContent: 'space-around',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      {['🏠', '📊', '💳', '👤'].map((icon, i) => (
        <div key={i} style={{
          fontSize: '14px', opacity: i === 0 ? 1 : 0.4,
        }}>{icon}</div>
      ))}
    </div>
  </div>
);

// ── Wallet Card Mockup
const WalletMockup = () => (
  <div style={{
    background: 'linear-gradient(135deg, rgba(76,95,213,0.08) 0%, rgba(108,99,255,0.05) 100%)',
    border: '1px solid rgba(76,95,213,0.15)',
    borderRadius: '24px', padding: '28px', width: '100%',
  }}>
    {/* Balance banner */}
    <div style={{
      background: 'linear-gradient(135deg, #4C5FD5 0%, #6C63FF 100%)',
      borderRadius: '16px', padding: '20px', marginBottom: '16px',
    }}>
      <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', marginBottom: '4px' }}>Total Available Balance</div>
      <div style={{ color: '#fff', fontSize: '2rem', fontWeight: 800, marginBottom: '16px' }}>₦4,941,938</div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {[
          { label: 'USD Wallet', val: '$2,552' },
          { label: 'Bonus', val: '₦12,500' },
          { label: 'Coins', val: '🪙 517' },
        ].map((w, i) => (
          <div key={i}>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '10px' }}>{w.label}</div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '13px' }}>{w.val}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Action buttons */}
    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
      {[
        { label: '+ Fund', bg: '#4C5FD5', color: '#fff' },
        { label: '↓ Withdraw', bg: 'rgba(76,95,213,0.1)', color: '#4C5FD5' },
        { label: '→ Transfer', bg: 'rgba(76,95,213,0.1)', color: '#4C5FD5' },
      ].map((btn, i) => (
        <button key={i} style={{
          flex: 1, padding: '8px 4px', background: btn.bg,
          color: btn.color, border: 'none', borderRadius: '8px',
          fontWeight: 700, fontSize: '11px', cursor: 'pointer',
        }}>{btn.label}</button>
      ))}
    </div>

    {/* Recent transactions */}
    {[
      { icon: '📱', label: 'MTN 10GB Data', time: 'Just now', amt: '-₦3,400', color: '#EF4444' },
      { icon: '💰', label: 'PayPal Sale Approved', time: '2 min ago', amt: '+₦285,000', color: '#10B981' },
      { icon: '⚡', label: 'IKEDC Electricity', time: '5 min ago', amt: '-₦5,000', color: '#EF4444' },
      { icon: '🎁', label: 'Referral Bonus', time: '1 hr ago', amt: '+₦2,500', color: '#10B981' },
    ].map((tx, i) => (
      <div key={i} style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '10px 12px', borderRadius: '10px', marginBottom: '6px',
        background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '18px' }}>{tx.icon}</span>
          <div>
            <div style={{ color: '#e2e8f0', fontSize: '13px', fontWeight: 600 }}>{tx.label}</div>
            <div style={{ color: '#718096', fontSize: '11px' }}>{tx.time}</div>
          </div>
        </div>
        <div style={{ color: tx.color, fontWeight: 700, fontSize: '13px' }}>{tx.amt}</div>
      </div>
    ))}
  </div>
);

const Home = () => {
  const location = useLocation();
  const { appName } = useAppInfo();
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  const users = useCounter(5000, 2000, statsVisible);
  const orders = useCounter(100, 1500, statsVisible);
  const rate = useCounter(99, 1500, statsVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function fadeout() {
      const el = document.querySelector('.preloader');
      if (el) { el.style.opacity = '0'; el.style.display = 'none'; }
    }
    const id = window.setTimeout(fadeout, 1500);
    return () => window.clearTimeout(id);
  }, [location.pathname]);

  return (
    <Fragment>
      <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon"><span></span><span></span></div>
        </div>
      </div>

      <MenuBar />

      {/* ── HERO ────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, #0F1629 0%, #1a2547 50%, #0F1629 100%)',
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
        paddingTop: '100px', paddingBottom: '60px',
      }}>
        <div style={{
          position: 'absolute', top: '-200px', right: '-200px', width: '600px', height: '600px',
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(76,95,213,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-100px', left: '-100px', width: '400px', height: '400px',
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-6 col-12" style={{ paddingRight: '40px' }}>
              <div style={{}}>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 800,
                color: '#ffffff', lineHeight: 1.12, marginBottom: '20px', letterSpacing: '-0.03em',
              }}>
                Your money.<br />
                <span style={{ color: '#4C5FD5' }}>Your currency.</span><br />
                Instant.
              </h1>

              <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '480px', marginBottom: '36px' }}>
                Sell PayPal, Payoneer and Bitcoin at competitive rates.
                Buy airtime, data, pay electricity and cable bills.
                Fund your wallet once — do everything from one place.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '48px' }}>
                <a href="/signup" style={{
                  background: '#4C5FD5', color: '#fff', padding: '14px 32px',
                  borderRadius: '10px', fontWeight: 700, fontSize: '15px',
                  textDecoration: 'none', display: 'inline-block',
                }}>
                  Create Free Account
                </a>
                <a href="/login" style={{
                  background: 'rgba(255,255,255,0.08)', color: '#fff',
                  padding: '14px 32px', borderRadius: '10px', fontWeight: 600,
                  fontSize: '15px', textDecoration: 'none', display: 'inline-block',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}>
                  Sign In
                </a>
              </div>

              {/* App store */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
                {[
                  { icon: '▶', store: 'Google Play', sub: 'Get it on' },
                  { icon: '', store: 'App Store', sub: 'Download on the' },
                ].map((s, i) => (
                  <a key={i} href="/#" style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '10px', padding: '10px 18px', textDecoration: 'none', color: '#fff',
                  }}>
                    <span style={{ fontSize: '20px' }}>{s.icon || '🍎'}</span>
                    <div>
                      <div style={{ fontSize: '10px', color: '#94a3b8' }}>{s.sub}</div>
                      <div style={{ fontSize: '14px', fontWeight: 700 }}>{s.store}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Stats */}
              <div ref={statsRef} style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                {[
                  { value: `${users.toLocaleString()}+`, label: 'Registered users' },
                  { value: `${orders.toLocaleString()}%`, label: 'Satisfactory' },
                  { value: `${rate}%`, label: 'Delivery success' },
                ].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>{s.value}</div>
                    <div style={{ fontSize: '12px', color: '#718096' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — App mockups */}
            <div className="col-lg-6 col-12" style={{ marginTop: '40px' }}>
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '20px' }}>
                {/* Phone mockup */}
                <div style={{ marginTop: '40px' }}>
                  <PhoneMockup />
                </div>
                {/* Wallet mockup */}
                <div style={{ flex: 1, maxWidth: '280px' }}>
                  <WalletMockup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ────────────────────────── */}
      <div style={{ background: '#F8FAFF', borderBottom: '1px solid #e8edf5', padding: '20px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ color: '#a0aec0', fontSize: '13px', fontWeight: 600 }}>CONNECTED TO</span>
            {['MTN', 'Airtel', 'Glo', '9mobile', 'DStv', 'GOtv', 'Electricity', 'PayPal', 'Payoneer', 'Bitcoin'].map((n, i) => (
              <span key={i} style={{
                color: '#4a5568', fontSize: '13px', fontWeight: 700,
                padding: '4px 12px', background: '#fff',
                borderRadius: '6px', border: '1px solid #e2e8f0',
              }}>{n}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ──────────────────────────── */}
      <section id="services" style={{ padding: '100px 0', background: '#F8FAFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 60px' }}>
            <div style={{
              display: 'inline-block', background: '#EEF2FF', color: '#4C5FD5',
              fontSize: '12px', fontWeight: 700, padding: '6px 16px',
              borderRadius: '100px', marginBottom: '16px',
            }}>WHAT WE OFFER</div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1A1F36', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              One wallet, every service you need
            </h2>
            <p style={{ color: '#718096', fontSize: '1rem', lineHeight: 1.8 }}>
              Direct provider integrations mean every order delivers in seconds — or refunds itself automatically.
            </p>
          </div>

          <div className="row g-4">
            {[
              { icon: '📱', title: 'Airtime Top-up', desc: 'Instant recharge on MTN, Glo, Airtel and 9mobile — below face value.', tag: 'All networks', color: '#EEF2FF', accent: '#4C5FD5' },
              { icon: '🌐', title: 'Data Bundles', desc: 'SME, gifting and corporate plans delivered the moment payment clears.', tag: 'Daily · Monthly', color: '#EEF2FF', accent: '#4C5FD5' },
              { icon: '⚡', title: 'Electricity Bills', desc: 'Prepaid tokens and postpaid settlement for every DisCo in Nigeria.', tag: 'All DisCos', color: '#FEF3C7', accent: '#D97706' },
              { icon: '📺', title: 'Cable TV', desc: 'Renew or upgrade DStv, GOtv and Startimes — smartcard verified first.', tag: 'DStv · GOtv · Star', color: '#D1FAE5', accent: '#10B981' },
              { icon: '🎓', title: 'Exam Result Pins', desc: 'WAEC, NECO, NABTEB and JAMB pins delivered instantly to your dashboard.', tag: 'Instant delivery', color: '#FEE2E2', accent: '#EF4444' },
              { icon: '💵', title: 'Sell PayPal', desc: 'Exchange your PayPal balance to your local currency at the best competitive rate.', tag: 'Best rates', color: '#DBEAFE', accent: '#3B82F6' },
              { icon: '💳', title: 'Sell Payoneer', desc: 'Convert your Payoneer earnings to your local currency quickly and securely.', tag: 'Fast & secure', color: '#EDE9FE', accent: '#7C3AED' },
              { icon: '₿', title: 'Sell Bitcoin', desc: 'Exchange Bitcoin to your local currency at transparent, live market-based rates.', tag: 'Live rates', color: '#FEF3C7', accent: '#D97706' },
              { icon: '🌍', title: 'Verified Accounts', desc: 'Get foreign social media account, PayPal and Payoneer accounts opened and verified for you.', tag: 'New service', color: '#D1FAE5', accent: '#10B981' },
            ].map((s, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-12">
                <div style={{
                  background: '#fff', borderRadius: '16px', padding: '28px',
                  border: '1px solid #e8edf5', height: '100%',
                }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '12px',
                    background: s.color, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '24px', marginBottom: '16px',
                  }}>{s.icon}</div>
                  <h4 style={{ fontWeight: 700, color: '#1A1F36', fontSize: '1rem', marginBottom: '8px' }}>{s.title}</h4>
                  <p style={{ color: '#718096', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>{s.desc}</p>
                  <span style={{
                    background: s.color, color: s.accent, fontSize: '11px',
                    fontWeight: 700, padding: '4px 10px', borderRadius: '100px',
                  }}>{s.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP PREVIEW ───────────────────────── */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #0F1629 0%, #1a2547 100%)',
        overflow: 'hidden', position: 'relative',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px', height: '800px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(76,95,213,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-5 col-12" style={{ marginBottom: '48px' }}>
              <div style={{
                display: 'inline-block', background: 'rgba(76,95,213,0.2)',
                color: '#818cf8', fontSize: '12px', fontWeight: 700,
                padding: '6px 16px', borderRadius: '100px', marginBottom: '16px',
              }}>MOBILE APP</div>
              <h2 style={{
                fontSize: '2.2rem', fontWeight: 800, color: '#fff',
                lineHeight: 1.3, marginBottom: '20px', letterSpacing: '-0.02em',
              }}>
                Carry your wallet everywhere you go
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.8, marginBottom: '32px' }}>
                Buy on the move, get an instant alert when an order delivers,
                and check your balance without opening a browser.
                Everything you need, in your pocket.
              </p>

              {[
                { icon: '🔔', text: 'Instant delivery notifications' },
                { icon: '📊', text: 'Full transaction history and reports' },
                { icon: '🔐', text: 'Secure authentication & PIN security' },
                { icon: '⚡', text: 'One-tap repeat orders' },
              ].map((f, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px',
                }}>
                  <span style={{
                    width: '32px', height: '32px', borderRadius: '8px',
                    background: 'rgba(76,95,213,0.2)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0,
                  }}>{f.icon}</span>
                  <span style={{ color: '#94a3b8', fontSize: '15px' }}>{f.text}</span>
                </div>
              ))}

              <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
                <a href="/#" style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  background: '#4C5FD5', borderRadius: '10px', padding: '12px 20px',
                  textDecoration: 'none', color: '#fff',
                }}>
                  <span style={{ fontSize: '20px' }}>▶</span>
                  <div>
                    <div style={{ fontSize: '10px', opacity: 0.8 }}>Get it on</div>
                    <div style={{ fontSize: '14px', fontWeight: 700 }}>Google Play</div>
                  </div>
                </a>
                <a href="/#" style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '10px', padding: '12px 20px', textDecoration: 'none', color: '#fff',
                }}>
                  <span style={{ fontSize: '20px' }}>🍎</span>
                  <div>
                    <div style={{ fontSize: '10px', opacity: 0.8 }}>Download on the</div>
                    <div style={{ fontSize: '14px', fontWeight: 700 }}>App Store</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Multiple phone mockups */}
            <div className="col-lg-7 col-12">
              <div style={{
                display: 'flex', justifyContent: 'center',
                gap: '20px', alignItems: 'flex-start',
              }}>
                {/* Phone 1 — Dashboard */}
                <div style={{ marginTop: '0px' }}>
                  <PhoneMockup />
                </div>

                {/* Phone 2 — Transaction detail */}
                <div style={{
                  width: '200px', height: '400px', borderRadius: '28px',
                  background: '#0F1629', border: '3px solid rgba(76,95,213,0.3)',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
                  overflow: 'hidden', marginTop: '60px', flexShrink: 0,
                }}>
                  <div style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', padding: '20px 16px 28px' }}>
                    <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '9px', marginBottom: '4px' }}>Transaction Successful</div>
                    <div style={{ color: '#fff', fontSize: '22px', fontWeight: 800 }}>+₦285,000</div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '10px', marginTop: '4px' }}>PayPal Sale Approved</div>
                  </div>
                  <div style={{ padding: '16px' }}>
                    {[
                      { label: 'Transaction ID', value: 'TXN-8841207' },
                      { label: 'Date', value: 'Sep 13, 2026' },
                      { label: 'Status', value: '✅ Successful' },
                      { label: 'New Balance', value: '₦4,941,938' },
                    ].map((d, i) => (
                      <div key={i} style={{
                        display: 'flex', justifyContent: 'space-between',
                        padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <span style={{ color: '#718096', fontSize: '9px' }}>{d.label}</span>
                        <span style={{ color: '#e2e8f0', fontSize: '9px', fontWeight: 700 }}>{d.value}</span>
                      </div>
                    ))}

                    <div style={{ marginTop: '16px' }}>
                      <div style={{
                        background: 'linear-gradient(135deg, #4C5FD5, #6C63FF)',
                        borderRadius: '8px', padding: '10px', textAlign: 'center',
                        color: '#fff', fontSize: '10px', fontWeight: 700,
                      }}>View Receipt</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────── */}
      <section id="how" style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '540px', margin: '0 auto 60px' }}>
            <div style={{
              display: 'inline-block', background: '#EEF2FF', color: '#4C5FD5',
              fontSize: '12px', fontWeight: 700, padding: '6px 16px',
              borderRadius: '100px', marginBottom: '16px',
            }}>HOW IT WORKS</div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1A1F36', letterSpacing: '-0.02em' }}>
              Start in under five minutes
            </h2>
          </div>

          <div className="row g-4 justify-content-center">
            {[
              { num: '01', icon: '👤', title: 'Create your account', desc: 'Name, email and phone number. No documents needed to start. Live in under a minute.' },
              { num: '02', icon: '🔐', title: 'Set your PIN', desc: 'A 4-digit transaction PIN, separate from your password. Every purchase needs it.' },
              { num: '03', icon: '💳', title: 'Fund your wallet', desc: 'Transfer to your dedicated account number from any bank app. Balance reflects instantly.' },
              { num: '04', icon: '⚡', title: 'Buy, sell or pay', desc: 'Pick a service, confirm, enter your PIN. Done before you close the screen.' },
            ].map((step, i) => (
              <div key={i} className="col-lg-3 col-md-6 col-12">
                <div style={{
                  textAlign: 'center', padding: '28px 20px',
                  background: '#F8FAFF', borderRadius: '16px',
                  border: '1px solid #e8edf5', height: '100%',
                }}>
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '16px',
                    background: 'linear-gradient(135deg, #4C5FD5 0%, #6C63FF 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 8px', fontSize: '24px',
                  }}>{step.icon}</div>
                  <div style={{ color: '#4C5FD5', fontSize: '11px', fontWeight: 700, marginBottom: '8px' }}>STEP {step.num}</div>
                  <h4 style={{ fontWeight: 700, color: '#1A1F36', fontSize: '1rem', marginBottom: '10px' }}>{step.title}</h4>
                  <p style={{ color: '#718096', fontSize: '14px', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a href="/signup" style={{
              background: '#4C5FD5', color: '#fff', padding: '14px 40px',
              borderRadius: '10px', fontWeight: 700, fontSize: '15px',
              textDecoration: 'none', display: 'inline-block',
            }}>Create Your Free Account</a>
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────── */}
      <section style={{ padding: '100px 0', background: '#F8FAFF' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-12" style={{ marginBottom: '40px' }}>
              <div style={{
                display: 'inline-block', background: '#EEF2FF', color: '#4C5FD5',
                fontSize: '12px', fontWeight: 700, padding: '6px 16px',
                borderRadius: '100px', marginBottom: '16px',
              }}>WHY CHOOSE US</div>
              <h2 style={{
                fontSize: '2.2rem', fontWeight: 800, color: '#1A1F36',
                lineHeight: 1.3, letterSpacing: '-0.02em', marginBottom: '20px',
              }}>
                Why thousands of users trust {appName}
              </h2>
              <p style={{ color: '#718096', lineHeight: 1.8, marginBottom: '32px' }}>
                We built {appName} around the exact things that frustrate
                people about trusted virtual fund platforms and fixed every single one.
              </p>
              <a href="/signup" style={{
                background: '#1A1F36', color: '#fff', padding: '13px 32px',
                borderRadius: '10px', fontWeight: 600, fontSize: '14px',
                textDecoration: 'none', display: 'inline-block',
              }}>Get started free →</a>
            </div>
            <div className="col-lg-7 col-12">
              <div className="row g-3">
                {[
                  { icon: '💎', title: 'Best rates guaranteed', desc: 'Competitive PayPal, Payoneer and Bitcoin rates published openly, no surprises at the last step.' },
                  { icon: '⚡', title: 'Delivered in seconds', desc: 'Direct provider connections, not a queue. Average order settles in under 10 seconds.' },
                  { icon: '🔒', title: 'Bank-grade security', desc: 'Encrypted transactions, separate transaction PIN, and automatic refunds on failed orders.' },
                  { icon: '🌙', title: 'Always available 24/7', desc: 'Platform runs 24/7, exactly when you need it most.' },
                  { icon: '🎁', title: 'Earn while you transact', desc: 'Referral bonuses, signup rewards, and coins on every purchase, redeemable for cash.' },
                  { icon: '💬', title: 'Real human support', desc: 'Reach us on WhatsApp with your full order history already in front of us.' },
                ].map((r, i) => (
                  <div key={i} className="col-md-6 col-12">
                    <div style={{
                      background: '#fff', borderRadius: '14px', padding: '20px',
                      border: '1px solid #e8edf5', display: 'flex', gap: '14px',
                    }}>
                      <div style={{
                        width: '44px', height: '44px', borderRadius: '10px',
                        background: '#EEF2FF', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', fontSize: '20px', flexShrink: 0,
                      }}>{r.icon}</div>
                      <div>
                        <h5 style={{ fontWeight: 700, color: '#1A1F36', fontSize: '14px', marginBottom: '6px' }}>{r.title}</h5>
                        <p style={{ color: '#718096', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────── */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto 60px' }}>
            <div style={{
              display: 'inline-block', background: '#EEF2FF', color: '#4C5FD5',
              fontSize: '12px', fontWeight: 700, padding: '6px 16px',
              borderRadius: '100px', marginBottom: '16px',
            }}>WHAT USERS SAY</div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1A1F36', letterSpacing: '-0.02em' }}>
              Trusted by thousands of users
            </h2>
          </div>
          <div className="row g-4">
            {[
              { text: 'One order failed at midnight and the money was back in my wallet before I finished typing the complaint. That is the kind of service that keeps me here.', name: 'Chinedu E.', role: 'Lagos', avatar: 'C', color: '#4C5FD5' },
              { text: 'I pay my electricity, renew DStv and buy data for three phones from the same wallet. The electricity token stays on my receipt so I never lose it again.', name: 'Funmi A.', role: 'Abuja', avatar: 'F', color: '#10B981' },
              { text: 'Selling my PayPal used to take hours with strangers and most time I lose my money, Now I submit the request and my account is credited within the hour. No stress, no risk.', name: 'Musa B.', role: 'Kano', avatar: 'M', color: '#6C63FF' },
            ].map((t, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-12">
                <div style={{
                  background: '#F8FAFF', borderRadius: '20px', padding: '28px',
                  border: '1px solid #e8edf5', height: '100%', display: 'flex', flexDirection: 'column',
                }}>
                  {/* Stars */}
                  <div style={{ marginBottom: '16px' }}>
                    {'★★★★★'.split('').map((s, i) => (
                      <span key={i} style={{ color: '#F59E0B', fontSize: '16px' }}>{s}</span>
                    ))}
                  </div>
                  <p style={{ color: '#4A5568', fontSize: '15px', lineHeight: 1.8, flexGrow: 1, marginBottom: '24px', fontStyle: 'italic' }}>
                    "{t.text}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '50%',
                      background: `linear-gradient(135deg, ${t.color}, ${t.color}99)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontWeight: 700, fontSize: '16px', flexShrink: 0,
                    }}>{t.avatar}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#1A1F36', fontSize: '15px' }}>{t.name}</div>
                      <div style={{ color: '#718096', fontSize: '13px' }}>{t.role} · Verified User</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────── */}
      <section id="faq" style={{ padding: '100px 0', background: '#F8FAFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto 60px' }}>
            <div style={{
              display: 'inline-block', background: '#EEF2FF', color: '#4C5FD5',
              fontSize: '12px', fontWeight: 700, padding: '6px 16px',
              borderRadius: '100px', marginBottom: '16px',
            }}>FAQ</div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1A1F36', letterSpacing: '-0.02em' }}>
              Questions people ask
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <div className="accordion" id="faqAccordion">
                {[
                  { q: 'How fast will my order land?', a: 'Most orders settle in under 10 seconds. Electricity and cable can take slightly longer because the biller confirms first — but your dashboard always shows the true status.' },
                  { q: 'What happens if my order fails?', a: 'Your wallet is refunded automatically. No ticket needed, no screenshot to send. The failed order stays in your history marked as refunded.' },
                  { q: 'How do I fund my wallet?', a: 'Every user have access to fund account from the app the moment you login. User can also transfer from any bank app and your balance updates instantly. Card funding is also available.' },
                  { q: 'How do I sell my PayPal, Payoneer or Bitcoin?', a: 'Log in, go to the Sales section, enter your amount and submit your proof. Admin reviews and credits your local currency wallet, usually within a few minutes.' },
                  { q: 'Is there a minimum amount?', a: 'No. Funding maybe applied but service purchase with any amount and buy airtime from ₦50. No monthly fee, no minimum balance, nothing deducted for keeping the account open.' },
                  { q: 'Can I withdraw my balance?', a: 'Yes, to your bank account whenever you want. No lock-in period, no waiting for a settlement window.' },
                  { q: 'Is my money safe?', a: 'Every transaction is encrypted. Each purchase needs your 4-digit transaction PIN — separate from your password — so a borrowed phone cannot spend your balance.' },
                  { q: 'Can I earn money by referring friends?', a: 'Yes. You earn a bonus when friends you refer make their first qualifying transaction. Active users can also become promoters and earn ongoing commissions.' },
                ].map((faq, i) => (
                  <div key={i} className="accordion-item" style={{
                    border: '1px solid #e8edf5', borderRadius: '12px',
                    marginBottom: '10px', overflow: 'hidden', background: '#fff',
                  }}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#fc${i}`}
                        style={{ fontWeight: 600, fontSize: '15px', color: '#1A1F36', background: '#fff', boxShadow: 'none' }}>
                        {faq.q}
                      </button>
                    </h2>
                    <div id={`fc${i}`} className="accordion-collapse collapse">
                      <div className="accordion-body" style={{ color: '#718096', fontSize: '15px', lineHeight: 1.8 }}>
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, #0F1629 0%, #1a2547 100%)',
        padding: '80px 0',
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-12" style={{ marginBottom: '24px' }}>
              <h2 style={{
                color: '#fff', fontSize: '2.2rem', fontWeight: 800,
                lineHeight: 1.3, letterSpacing: '-0.02em', marginBottom: '12px',
              }}>
                Ready to start? It takes two minutes.
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.8, margin: 0 }}>
                Create your account, fund your wallet and place your first order today.
                No setup fee, no paperwork, no waiting.
              </p>
            </div>
            <div className="col-lg-5 col-12">
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="/signup" style={{
                  background: '#4C5FD5', color: '#fff', padding: '14px 32px',
                  borderRadius: '10px', fontWeight: 700, fontSize: '15px',
                  textDecoration: 'none', display: 'inline-block',
                }}>Create Free Account</a>
                <a href="/#" style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '10px', padding: '14px 24px', textDecoration: 'none',
                  color: '#fff', fontWeight: 600, fontSize: '14px',
                }}>▶ Google Play</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterNote />
    </Fragment>
  );
};

export default Home;
