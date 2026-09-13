import React, { Fragment, useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import MenuBar from '../component/Menu';
import FooterNote from '../component/Footer';

// ── Animated counter hook
const useCounter = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(false);
  useEffect(() => {
    if (ref.current) return;
    ref.current = true;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
};

const Home = () => {
  const location = useLocation();
  const appName = JSON.parse(localStorage.getItem('CompanyName') || '"Ota Mobile"');

  useEffect(() => {
    function fadeout() {
      const el = document.querySelector('.preloader');
      if (el) { el.style.opacity = '0'; el.style.display = 'none'; }
    }
    const id = window.setTimeout(fadeout, 1500);
    return () => window.clearTimeout(id);
  }, [location.pathname]);

  const users = useCounter(15000);
  const orders = useCounter(98000);
  const rate = useCounter(99);
  const seconds = useCounter(8);

  return (
    <Fragment>
      {/* Preloader */}
      <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon"><span></span><span></span></div>
        </div>
      </div>

      <MenuBar />

      {/* ── HERO ──────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, #0F1629 0%, #1a2547 50%, #0F1629 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '100px',
        paddingBottom: '60px',
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute', top: '-200px', right: '-200px',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(76,95,213,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-100px', left: '-100px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-6 col-12" style={{ paddingRight: '40px' }}>
              {/* Trust badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(76,95,213,0.2)', border: '1px solid rgba(76,95,213,0.4)',
                borderRadius: '100px', padding: '6px 16px', marginBottom: '28px',
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                <span style={{ color: '#a0aec0', fontSize: '13px', fontWeight: 600 }}>
                  Trusted by {users.toLocaleString()}+ Nigerians
                </span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.15,
                marginBottom: '20px',
                letterSpacing: '-0.02em',
              }}>
                Your money.<br />
                <span style={{ color: '#4C5FD5' }}>Your currency.</span><br />
                Instant.
              </h1>

              <p style={{
                color: '#a0aec0', fontSize: '1.1rem', lineHeight: 1.8,
                maxWidth: '480px', marginBottom: '36px',
              }}>
                Sell PayPal, Payoneer and Bitcoin at competitive rates.
                Buy airtime, data, pay electricity and cable bills.
                Fund your wallet once — do everything from one place.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
                <a href="/signup" style={{
                  background: '#4C5FD5', color: '#fff', padding: '14px 32px',
                  borderRadius: '10px', fontWeight: 700, fontSize: '15px',
                  textDecoration: 'none', display: 'inline-block',
                  transition: 'all 0.2s',
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

              {/* App store buttons */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
                <a href="#" style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '10px', padding: '10px 20px', textDecoration: 'none', color: '#fff',
                }}>
                  <i className="lni lni-play-store" style={{ fontSize: '22px', color: '#10B981' }} />
                  <div>
                    <div style={{ fontSize: '10px', color: '#a0aec0' }}>Get it on</div>
                    <div style={{ fontSize: '14px', fontWeight: 700 }}>Google Play</div>
                  </div>
                </a>
                <a href="#" style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '10px', padding: '10px 20px', textDecoration: 'none', color: '#fff',
                }}>
                  <i className="lni lni-apple" style={{ fontSize: '22px', color: '#a0aec0' }} />
                  <div>
                    <div style={{ fontSize: '10px', color: '#a0aec0' }}>Download on the</div>
                    <div style={{ fontSize: '14px', fontWeight: 700 }}>App Store</div>
                  </div>
                </a>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                {[
                  { value: `${users.toLocaleString()}+`, label: 'Registered users' },
                  { value: `${rate}%`, label: 'Delivery success' },
                  { value: `~${seconds}s`, label: 'Avg. delivery time' },
                ].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff' }}>{s.value}</div>
                    <div style={{ fontSize: '12px', color: '#718096' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side — App mockup */}
            <div className="col-lg-6 col-12" style={{ marginTop: '40px' }}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(76,95,213,0.12) 0%, rgba(108,99,255,0.08) 100%)',
                border: '1px solid rgba(76,95,213,0.2)',
                borderRadius: '24px', padding: '32px',
                backdropFilter: 'blur(10px)',
              }}>
                {/* Mock wallet card */}
                <div style={{
                  background: 'linear-gradient(135deg, #4C5FD5 0%, #6C63FF 100%)',
                  borderRadius: '16px', padding: '24px', marginBottom: '16px', color: '#fff',
                }}>
                  <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '8px' }}>Main Wallet Balance</div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '16px' }}>₦1,250,000</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div><div style={{ fontSize: '10px', opacity: 0.7 }}>USD Wallet</div><div style={{ fontWeight: 700 }}>$842.00</div></div>
                    <div><div style={{ fontSize: '10px', opacity: 0.7 }}>Bonus</div><div style={{ fontWeight: 700 }}>₦12,500</div></div>
                    <div><div style={{ fontSize: '10px', opacity: 0.7 }}>Coins</div><div style={{ fontWeight: 700 }}>1,240</div></div>
                  </div>
                </div>

                {/* Mock recent transactions */}
                <div style={{ marginBottom: '12px' }}>
                  {[
                    { icon: '📱', label: 'MTN 10GB Data', time: 'Just now', amount: '-₦3,400', color: '#EF4444' },
                    { icon: '💰', label: 'PayPal Sale Approved', time: '2 min ago', amount: '+₦285,000', color: '#10B981' },
                    { icon: '⚡', label: 'IKEDC Electricity', time: '5 min ago', amount: '-₦5,000', color: '#EF4444' },
                    { icon: '📺', label: 'DStv Compact', time: '1 hr ago', amount: '-₦9,750', color: '#EF4444' },
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
                      <div style={{ color: tx.color, fontWeight: 700, fontSize: '13px' }}>{tx.amount}</div>
                    </div>
                  ))}
                </div>

                {/* Service icons */}
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '8px', flexWrap: 'wrap' }}>
                  {['MTN', 'Glo', 'Airtel', '9mobile', 'DStv', 'GOtv', 'PayPal', 'BTC'].map((n, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '6px', padding: '4px 8px', color: '#a0aec0', fontSize: '10px', fontWeight: 600,
                    }}>{n}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────── */}
      <section id="services" style={{ padding: '100px 0', background: '#F8FAFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 60px' }}>
            <div style={{
              display: 'inline-block', background: '#EEF2FF', color: '#4C5FD5',
              fontSize: '12px', fontWeight: 700, padding: '6px 16px',
              borderRadius: '100px', marginBottom: '16px', letterSpacing: '0.5px',
            }}>
              WHAT WE OFFER
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1A1F36', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              One wallet, every service you need
            </h2>
            <p style={{ color: '#718096', fontSize: '1rem', lineHeight: 1.8 }}>
              Direct provider integrations mean every order delivers in seconds — or refunds itself automatically.
            </p>
          </div>

          <div className="row g-4">
            {[
              { icon: '📱', title: 'Airtime Top-up', desc: 'Instant recharge on MTN, Glo, Airtel and 9mobile — below face value.', tag: 'All networks' },
              { icon: '🌐', title: 'Data Bundles', desc: 'SME, gifting and corporate plans delivered the moment payment clears.', tag: 'Daily · Weekly · Monthly' },
              { icon: '⚡', title: 'Electricity Bills', desc: 'Prepaid tokens and postpaid settlement for every DisCo in Nigeria.', tag: 'All DisCos' },
              { icon: '📺', title: 'Cable TV', desc: 'Renew or upgrade DStv, GOtv and Startimes with smartcard verified before you pay.', tag: 'DStv · GOtv · Startimes' },
              { icon: '🎓', title: 'Exam Result Pins', desc: 'WAEC, NECO, NABTEB and JAMB pins delivered instantly to your dashboard.', tag: 'Instant delivery' },
              { icon: '💵', title: 'Sell PayPal Funds', desc: 'Get the best rate exchanging your PayPal balance to Naira. Credited same day.', tag: 'Competitive rates' },
              { icon: '💳', title: 'Sell Payoneer', desc: 'Convert your Payoneer earnings to Naira quickly and securely.', tag: 'Fast & secure' },
              { icon: '₿', title: 'Sell Bitcoin', desc: 'Exchange your Bitcoin to Naira at transparent market-based rates.', tag: 'Live rates' },
              { icon: '🌍', title: 'Virtual Account Opening', desc: 'Get foreign accounts opened and verified — PayPal, Payoneer and more.', tag: 'New service' },
            ].map((s, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-12">
                <div style={{
                  background: '#fff', borderRadius: '16px', padding: '28px',
                  border: '1px solid #e8edf5', height: '100%',
                  transition: 'all 0.2s', cursor: 'default',
                }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '12px',
                    background: '#EEF2FF', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '24px', marginBottom: '16px',
                  }}>{s.icon}</div>
                  <h4 style={{ fontWeight: 700, color: '#1A1F36', fontSize: '1rem', marginBottom: '8px' }}>{s.title}</h4>
                  <p style={{ color: '#718096', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>{s.desc}</p>
                  <span style={{
                    background: '#F0F4FF', color: '#4C5FD5', fontSize: '11px',
                    fontWeight: 700, padding: '4px 10px', borderRadius: '100px',
                  }}>{s.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────── */}
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
              { num: '01', title: 'Create your account', desc: 'Name, email and phone number. No documents needed to start. You are live in under a minute.' },
              { num: '02', title: 'Fund your wallet', desc: 'Transfer from any bank app to your dedicated account number. Balance updates instantly — no screenshot to send.' },
              { num: '03', title: 'Set your transaction PIN', desc: 'A 4-digit PIN separate from your password. Every purchase needs it so a lost phone cannot spend your balance.' },
              { num: '04', title: 'Buy, sell or pay bills', desc: 'Pick a service, confirm, enter your PIN. The receipt, token or credit lands before you close the screen.' },
            ].map((step, i) => (
              <div key={i} className="col-lg-3 col-md-6 col-12">
                <div style={{ textAlign: 'center', padding: '24px 16px' }}>
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '16px',
                    background: 'linear-gradient(135deg, #4C5FD5 0%, #6C63FF 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px', color: '#fff', fontSize: '1.2rem', fontWeight: 800,
                  }}>{step.num}</div>
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
            }}>
              Create Your Free Account
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────── */}
      <section style={{ padding: '100px 0', background: '#F8FAFF' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-12" style={{ marginBottom: '40px' }}>
              <div style={{
                display: 'inline-block', background: '#EEF2FF', color: '#4C5FD5',
                fontSize: '12px', fontWeight: 700, padding: '6px 16px',
                borderRadius: '100px', marginBottom: '16px',
              }}>WHY CHOOSE US</div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1A1F36', lineHeight: 1.3, letterSpacing: '-0.02em', marginBottom: '20px' }}>
                Six reasons people move their transactions here
              </h2>
              <p style={{ color: '#718096', lineHeight: 1.8, marginBottom: '32px' }}>
                We built {appName} around the things that actually frustrate people about virtual fund platforms — and fixed every one of them.
              </p>
              <a href="/signup" style={{
                background: '#1A1F36', color: '#fff', padding: '13px 32px',
                borderRadius: '10px', fontWeight: 600, fontSize: '14px',
                textDecoration: 'none', display: 'inline-block',
              }}>
                Get started free
              </a>
            </div>
            <div className="col-lg-7 col-12">
              <div className="row g-3">
                {[
                  { icon: '💎', title: 'Best rates in the market', desc: 'Competitive PayPal, Payoneer and Bitcoin rates published openly — no surprises at the last step.' },
                  { icon: '⚡', title: 'Delivered in seconds', desc: 'Direct provider connections, not a queue. Average order settles in under 10 seconds.' },
                  { icon: '🔒', title: 'Your money is protected', desc: 'Encrypted transactions, a separate transaction PIN, and automatic refunds on failed orders.' },
                  { icon: '🌙', title: 'Available 24/7', desc: 'The platform runs at 3am on public holidays — because that is exactly when you need it.' },
                  { icon: '📲', title: 'Works on any device', desc: 'Built mobile-first. Works perfectly on the smallest screen, on a slow connection.' },
                  { icon: '💬', title: 'Real human support', desc: 'Reach us on WhatsApp and live chat with your full order history already in front of us.' },
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

      {/* ── TESTIMONIALS ─────────────────────────── */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto 60px' }}>
            <div style={{
              display: 'inline-block', background: '#EEF2FF', color: '#4C5FD5',
              fontSize: '12px', fontWeight: 700, padding: '6px 16px',
              borderRadius: '100px', marginBottom: '16px',
            }}>WHAT USERS SAY</div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1A1F36', letterSpacing: '-0.02em' }}>
              Trusted by thousands of Nigerians
            </h2>
          </div>
          <div className="row g-4">
            {[
              {
                text: 'One order failed at midnight and the money was back in my wallet before I finished typing the complaint. That is the kind of service that keeps me here.',
                name: 'Chinedu E.', role: 'Verified user', avatar: 'C',
              },
              {
                text: 'I pay my electricity bill, renew my DStv and buy data for three phones all from the same wallet. The electricity token stays on my receipt so I never lose it again.',
                name: 'Funmi A.', role: 'Verified user', avatar: 'F',
              },
              {
                text: 'Selling my PayPal used to take hours of back and forth with strangers. Now I submit the request and my Naira is credited within the hour. No stress.',
                name: 'Musa B.', role: 'Verified user', avatar: 'M',
              },
            ].map((t, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-12">
                <div style={{
                  background: '#F8FAFF', borderRadius: '16px', padding: '28px',
                  border: '1px solid #e8edf5', height: '100%',
                  display: 'flex', flexDirection: 'column',
                }}>
                  <div style={{ color: '#4C5FD5', fontSize: '2rem', lineHeight: 1, marginBottom: '16px' }}>"</div>
                  <p style={{ color: '#4A5568', fontSize: '14px', lineHeight: 1.8, flexGrow: 1, marginBottom: '24px' }}>{t.text}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '50%',
                      background: 'linear-gradient(135deg, #4C5FD5, #6C63FF)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontWeight: 700, fontSize: '14px', flexShrink: 0,
                    }}>{t.avatar}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#1A1F36', fontSize: '14px' }}>{t.name}</div>
                      <div style={{ color: '#718096', fontSize: '12px' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────── */}
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
                  { q: 'How do I fund my wallet?', a: 'Every account gets a dedicated account number the moment you register. Transfer from any bank app and your balance updates instantly. Card funding is also available.' },
                  { q: 'Is there a minimum amount?', a: 'No. Fund with any amount and buy airtime from ₦50. No monthly fee, no minimum balance, nothing deducted for keeping the account open.' },
                  { q: 'How do I sell my PayPal, Payoneer or Bitcoin?', a: 'Log in, go to the Sales section, enter your amount and submit. Admin reviews and credits your Naira wallet — usually within a few hours.' },
                  { q: 'Can I withdraw my balance?', a: 'Yes, to your bank account whenever you want. No lock-in period, no waiting for a settlement window.' },
                  { q: 'Is my money safe?', a: 'Every transaction is encrypted. Each purchase needs your 4-digit transaction PIN which is separate from your password — so a borrowed phone cannot spend your balance.' },
                  { q: 'Can I help others and earn from it?', a: 'Yes. Refer friends and earn a bonus when they transact. Active users can also become promoters and earn ongoing commissions from their referrals.' },
                ].map((faq, i) => (
                  <div key={i} className="accordion-item" style={{
                    border: '1px solid #e8edf5', borderRadius: '12px',
                    marginBottom: '10px', overflow: 'hidden', background: '#fff',
                  }}>
                    <h2 className="accordion-header" id={`fh${i}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#fc${i}`}
                        aria-expanded="false"
                        style={{ fontWeight: 600, fontSize: '15px', color: '#1A1F36', background: '#fff', boxShadow: 'none' }}>
                        {faq.q}
                      </button>
                    </h2>
                    <div id={`fc${i}`} className="accordion-collapse collapse">
                      <div className="accordion-body" style={{ color: '#718096', fontSize: '14px', lineHeight: 1.8 }}>
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

      {/* ── CTA BANNER ───────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, #0F1629 0%, #1a2547 100%)',
        padding: '80px 0',
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-12" style={{ marginBottom: '24px' }}>
              <h2 style={{
                color: '#fff', fontSize: '2rem', fontWeight: 800,
                lineHeight: 1.3, letterSpacing: '-0.02em', marginBottom: '12px',
              }}>
                Ready to start? It takes two minutes.
              </h2>
              <p style={{ color: '#a0aec0', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                Create your account, fund your wallet and place your first order today.
                No setup fee and no paperwork.
              </p>
            </div>
            <div className="col-lg-5 col-12">
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="/signup" style={{
                  background: '#4C5FD5', color: '#fff', padding: '14px 32px',
                  borderRadius: '10px', fontWeight: 700, fontSize: '15px',
                  textDecoration: 'none', display: 'inline-block',
                }}>
                  Create Free Account
                </a>
                <a href="#" style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '10px', padding: '14px 24px', textDecoration: 'none', color: '#fff', fontWeight: 600,
                }}>
                  <i className="lni lni-play-store" /> Google Play
                </a>
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