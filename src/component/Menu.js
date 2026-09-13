import React, { Fragment, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAppInfo from './useAppInfo';

const MenuBar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { appName, appLogo } = useAppInfo();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <Fragment>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled || !isHome
          ? 'rgba(15, 22, 41, 0.97)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        padding: scrolled ? '12px 0' : '20px 0',
      }}>
        <div className="container">
          <nav className="navbar navbar-expand-lg" style={{ padding: 0 }}>
            {/* Logo */}
          <Link to="/" style={{
              textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              {appLogo ? (
                <img
                  src={appLogo}
                  alt={appName}
                  style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
                  onError={e => { e.target.style.display = 'none'; }}
                />
              ) : (
                <div style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'linear-gradient(135deg, #4C5FD5, #6C63FF)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: 800, fontSize: '16px',
                }}>
                  {appName?.charAt(0) || 'O'}
                </div>
              )}
              <span style={{ color: '#fff', fontWeight: 800, fontSize: '18px' }}>{appName}</span>
            </Link>

            {/* Mobile toggle */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navMain"
              style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '6px 10px' }}>
              <span style={{ display: 'block', width: '22px', height: '2px', background: '#fff', marginBottom: '4px' }} />
              <span style={{ display: 'block', width: '22px', height: '2px', background: '#fff', marginBottom: '4px' }} />
              <span style={{ display: 'block', width: '22px', height: '2px', background: '#fff' }} />
            </button>

            <div className="collapse navbar-collapse" id="navMain">
              {/* Nav links */}
              <ul className="navbar-nav ms-auto align-items-center" style={{ gap: '4px' }}>
                {[
                  { label: 'Home', path: '/' },
                  { label: 'Services', path: '/services' },
                  { label: 'About', path: '/about-us' },
                  { label: 'Contact', path: '/contact-us' },
                ].map(link => (
                  <li key={link.path} className="nav-item">
                    <Link to={link.path} style={{
                      color: location.pathname === link.path ? '#fff' : 'rgba(255,255,255,0.65)',
                      fontWeight: location.pathname === link.path ? 700 : 500,
                      fontSize: '14px', textDecoration: 'none',
                      padding: '8px 14px', display: 'block', borderRadius: '8px',
                      background: location.pathname === link.path ? 'rgba(76,95,213,0.2)' : 'transparent',
                      transition: 'all 0.2s',
                    }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Auth buttons */}
              <div style={{ display: 'flex', gap: '10px', marginLeft: '20px', alignItems: 'center' }}>
                <Link to="/login" style={{
                  color: 'rgba(255,255,255,0.8)', fontWeight: 600,
                  fontSize: '14px', textDecoration: 'none', padding: '8px 16px',
                }}>
                  Sign in
                </Link>
                <Link to="/signup" style={{
                  background: '#4C5FD5', color: '#fff', fontWeight: 700,
                  fontSize: '14px', textDecoration: 'none', padding: '9px 20px',
                  borderRadius: '8px', display: 'block',
                }}>
                  Get started
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default MenuBar;